import type { StorybookConfig } from '@storybook/react-webpack5';
import { DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

const config: StorybookConfig = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-addon-themes',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: (configuration) => {
        const config = configuration;
        config.resolve.plugins = config.resolve.plugins || [];
        config.resolve.plugins.push(
            new TsconfigPathsPlugin({
                configFile: path.resolve(__dirname, '../../tsconfig.json'),
            }),
        );

        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }

            return rule;
        });

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config.module.rules.push(buildCssLoader(true));

        config.plugins.push(new DefinePlugin({
            __IS_DEV__: true,
        }));

        return config;
    },
};
export default config;
