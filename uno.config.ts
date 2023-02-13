import { defineConfig, presetAttributify, presetIcons, presetUno, presetMini, toEscapedSelector as e } from 'unocss';

const keyMap: { [key: string]: string } = {
    m: 'margin',
    p: 'padding',
    h: 'height',
    w: 'width',
    r: 'right',
    l: 'left',
    t: 'top',
    b: 'bottom'
};

const directionMap: { [key: string]: string } = {
    t: '-top',
    b: '-bottom',
    r: '-right',
    l: '-left'
};

const positionMap: { [key: string]: string } = {
    r: 'relative',
    a: 'absolute',
    f: 'fixed',
    s: 'sticky'
};

export default defineConfig({
    // presets: [presetUno(), presetAttributify(), presetMini()],
    presets: [],
    rules: [
        [
            /^(m|p)(x|y|t|b|r|l)?(\d+%?)-?(\d+)?$/,
            ([, k, p, v, v2]) => {
                const v1 = v.endsWith('%') ? v : `${v}px`;
                const key = keyMap[k];
                const position = directionMap[p] || '';
                if (v2) {
                    return { [`${key}${position}`]: `${v1} ${v2}px` };
                }
                switch (p) {
                    case 'x':
                        return { [key]: `0 ${v1}` };
                    case 'y':
                        return { [key]: `${v1} 0` };
                    default:
                        return { [`${key}${position}`]: `${v1}` };
                }
            }
        ],
        [
            /^bd(x|y|t|b|r|l)?(\d+)?(#\w+)?$/,
            ([, p, v = 1, c = '#333']) => {
                const position = directionMap[p] || '';
                const border = `${v}px solid ${c}`;
                if (!p) {
                    return { border };
                }
                switch (p) {
                    case 'x':
                        return { border: `0 ${border}` };
                    case 'y':
                        return { border: `${border} 0` };
                    default:
                        return { [`border${position}`]: border };
                }
            }
        ],
        [
            /^(h|w|r|l|t|b)(-?\d+)(px|%|vh|vw)?(\S+)?$/,
            ([, k, v, u = 'px', e]) => {
                const key = keyMap[k];
                if (!e) {
                    return { [key]: `${v}${u}` };
                } else {
                    return { [key]: `calc(${v}${u}${e.split('-').join(' - ').split('+').join(' + ')})` };
                }
            }
        ],
        [/^po(r|a|f|s)$/, ([, v]) => ({ position: positionMap[v] })],
        [
            /^auto(x|y)?$/,
            ([, p], { rawSelector }) => {
                const selector = e(rawSelector);
                return `${selector}{overflow${p ? `-${p}` : ''}:auto;}\n${selector}::-webkit-scrollbar{display:none;}`;
            }
        ],
        [/^z(-?\d+)?$/, ([, v = '1']) => ({ 'z-index': v })],
        [/^bg(#\w+|rgb\S+)?$/, ([, v = '#fcc']) => ({ background: v })],
        [/^rd(\d+)(px|%)?$/, ([, v, u = 'px']) => ({ 'border-radius': `${v}${u}` })],
        [/^fs(\d+)(px)?$/, ([, v]) => ({ 'font-size': `${v}px` })],
        [/^lh(\d+)(px)?$/, ([, v]) => ({ 'line-height': `${v}px` })],
        [/^(#\w+|rgb\S+)$/, ([, v]) => ({ color: v })],
        [/^trans-?(\w+)?-?(\d*\.?\d+)?$/, ([, v, t = '.3']) => ({ transition: `${v || 'all'} ${t}s` })],
        [/^hidden(x|y)?$/, ([, p]) => ({ [`overflow${p ? `-${p}` : ''}`]: 'hidden' })],
        [/^j(\S+)$/, ([, v]) => ({ 'justify-content': v })],
        ['nowrap', { 'white-space': 'nowrap' }],
        ['flex', { display: 'flex' }],
        ['flexc', { display: 'flex', 'flex-direction': 'column' }],
        ['wrap', { 'flex-wrap': 'wrap' }],
        ['fRoot', { transform: 'translateZ(0)' }],
        ['inline', { display: 'inline' }],
        ['block', { display: 'block' }],
        ['inlineBlock', { display: 'inline-block' }],
        ['flex1', { flex: 1 }],
        ['acenter', { 'align-items': 'center' }],
        ['tcenter', { 'text-align': 'center' }],
        ['noClick', { 'pointer-events': 'none' }],
        ['canClick', { 'pointer-events': 'auto' }],
        [
            /^center(x|y)?$/,
            ([, p]) => {
                switch (p) {
                    case 'x':
                        return {
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)'
                        };
                    case 'y':
                        return {
                            position: 'absolute',
                            top: '50%',
                            transform: 'translateY(-50%)'
                        };
                    default:
                        return {
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)'
                        };
                }
            }
        ],
        [
            /^eiillpss(\d)?$/,
            ([, v]) => {
                const css: IObject = { overflow: 'hidden', 'white-space': 'nowrap', 'text-overflow': 'ellipsis' };
                if (v) {
                    css.display = '-webkit-box';
                    css['-webkit-box-orient'] = 'vertical';
                    css['-webkit-line-clamp'] = v;
                    delete css['white-space'];
                }
                return css;
            }
        ]
        // [/^(h|w)(\d+)%$/, ([, k, v]) => ({ [k]: `${v}%` })]
    ]
});
