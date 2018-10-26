import { Scope, StyleAttributor } from 'parchment';

const CustomStyles = new StyleAttributor('border', 'border', {
    scope: Scope.ANY,
    whitelist: ['*'],
});

export { CustomStyles };
