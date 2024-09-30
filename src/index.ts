import type { TSESLint } from "@typescript-eslint/utils";

import eslint from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import importx from "eslint-plugin-import-x";
import perfectionist from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";

export { config } from "typescript-eslint";

export function preset(rootPath: string) {
    return tseslint.config(
        eslint.configs.recommended,
        ...tseslint.configs.recommendedTypeChecked,
        perfectionist.configs["recommended-natural"],
        stylistic.configs.customize({
            flat: true,
            indent: 4,
            quotes: "double",
            semi: true,
            braceStyle: "stroustrup",
            commaDangle: "only-multiline"
        }),
        {
            plugins: {
                "import-x": importx
            },
            languageOptions: {
                parserOptions: {
                    projectService: true,
                    tsconfigRootDir: rootPath
                }
            },
            rules: {
                "perfectionist/sort-object-types": "off",
                "perfectionist/sort-interfaces": "off",
                "perfectionist/sort-classes": "off",
                "perfectionist/sort-objects": "off",
                "perfectionist/sort-enums": "off",
                "perfectionist/sort-sets": "off",
                "perfectionist/sort-maps": "off",
                "import-x/consistent-type-specifier-style": ["error", "prefer-top-level"]
            }
        }
    );
};
