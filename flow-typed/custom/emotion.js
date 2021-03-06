declare module 'emotion' {
  declare type EmotionRule = { [string]: any };

  declare type CSSRuleList = Array<EmotionRule>;

  declare class Stylesheet {
    inject(): void,
    insert(rule: string): void,
    flush(): void,
  }

  declare var sheet: Stylesheet;

  declare var inserted: { [string | number]: boolean | void };

  declare function flush(): void;

  declare function css(
    objs: Array<string> | EmotionRule | Array<EmotionRule>,
    vars: Array<any>,
    content: () => Array<any>
  ): string;

  declare function injectGlobal(objs: Array<any>, vars: Array<any>, content: () => Array<any>): void;

  declare function fontFace(objs: Array<any>, vars: Array<any>, content: () => Array<any>): void;

  declare function keyframes(objs: any, vars: Array<any>, content: () => Array<any>): void;
  declare function hydrate(ids: string[]): void;
  declare function objStyle(...rules: CSSRuleList): EmotionRule;
  declare function isLikeRule(rule: EmotionRule): boolean;
  declare function idFor(rule: EmotionRule): string;
}

declare module 'emotion/react' {
  declare type StyledComponent = (css: Array<string>) => React$ComponentType<any>;

  declare module.exports: {
    default: (tag: string, cls: string, objs: Object, vars: Array<*>, content: any) => React$ElementType,
    a: StyledComponent,
    abbr: StyledComponent,
    address: StyledComponent,
    area: StyledComponent,
    article: StyledComponent,
    aside: StyledComponent,
    audio: StyledComponent,
    b: StyledComponent,
    base: StyledComponent,
    bdi: StyledComponent,
    bdo: StyledComponent,
    big: StyledComponent,
    blockquote: StyledComponent,
    body: StyledComponent,
    br: StyledComponent,
    button: StyledComponent,
    canvas: StyledComponent,
    caption: StyledComponent,
    cite: StyledComponent,
    code: StyledComponent,
    col: StyledComponent,
    colgroup: StyledComponent,
    data: StyledComponent,
    datalist: StyledComponent,
    dd: StyledComponent,
    del: StyledComponent,
    details: StyledComponent,
    dfn: StyledComponent,
    dialog: StyledComponent,
    div: StyledComponent,
    dl: StyledComponent,
    dt: StyledComponent,
    em: StyledComponent,
    embed: StyledComponent,
    fieldset: StyledComponent,
    figcaption: StyledComponent,
    figure: StyledComponent,
    footer: StyledComponent,
    form: StyledComponent,
    h1: StyledComponent,
    h2: StyledComponent,
    h3: StyledComponent,
    h4: StyledComponent,
    h5: StyledComponent,
    h6: StyledComponent,
    head: StyledComponent,
    header: StyledComponent,
    hgroup: StyledComponent,
    hr: StyledComponent,
    html: StyledComponent,
    i: StyledComponent,
    iframe: StyledComponent,
    img: StyledComponent,
    input: StyledComponent,
    ins: StyledComponent,
    kbd: StyledComponent,
    keygen: StyledComponent,
    label: StyledComponent,
    legend: StyledComponent,
    li: StyledComponent,
    link: StyledComponent,
    main: StyledComponent,
    map: StyledComponent,
    mark: StyledComponent,
    menu: StyledComponent,
    menuitem: StyledComponent,
    meta: StyledComponent,
    meter: StyledComponent,
    nav: StyledComponent,
    noscript: StyledComponent,
    object: StyledComponent,
    ol: StyledComponent,
    optgroup: StyledComponent,
    option: StyledComponent,
    output: StyledComponent,
    p: StyledComponent,
    param: StyledComponent,
    picture: StyledComponent,
    pre: StyledComponent,
    progress: StyledComponent,
    q: StyledComponent,
    rp: StyledComponent,
    rt: StyledComponent,
    ruby: StyledComponent,
    s: StyledComponent,
    samp: StyledComponent,
    script: StyledComponent,
    section: StyledComponent,
    select: StyledComponent,
    small: StyledComponent,
    source: StyledComponent,
    span: StyledComponent,
    strong: StyledComponent,
    style: StyledComponent,
    sub: StyledComponent,
    summary: StyledComponent,
    sup: StyledComponent,
    table: StyledComponent,
    tbody: StyledComponent,
    td: StyledComponent,
    textarea: StyledComponent,
    tfoot: StyledComponent,
    th: StyledComponent,
    thead: StyledComponent,
    time: StyledComponent,
    title: StyledComponent,
    tr: StyledComponent,
    track: StyledComponent,
    u: StyledComponent,
    ul: StyledComponent,
    var: StyledComponent,
    video: StyledComponent,
    wbr: StyledComponent,

    // SVG
    circle: StyledComponent,
    clipPath: StyledComponent,
    defs: StyledComponent,
    ellipse: StyledComponent,
    g: StyledComponent,
    image: StyledComponent,
    line: StyledComponent,
    linearGradient: StyledComponent,
    mask: StyledComponent,
    path: StyledComponent,
    pattern: StyledComponent,
    polygon: StyledComponent,
    polyline: StyledComponent,
    radialGradient: StyledComponent,
    rect: StyledComponent,
    stop: StyledComponent,
    svg: StyledComponent,
    text: StyledComponent,
    tspan: StyledComponent,
  };
}
