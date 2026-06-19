/// <reference types="@nasl/types" />
/// <reference types="@nasl/types" />
/// <reference types="@nasl/types" />
/// <reference types="@nasl/types" />
declare namespace nasl.ui {
  export class VanArea extends ViewComponent {
    /**
     * 值
     */
    value: nasl.core.String;
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     */
    readonly: nasl.core.Boolean;
    /**
     * 预览
     */
    preview: nasl.core.Boolean;
    constructor(options?: Partial<VanAreaOptions>);
  }
  export class VanAreaOptions extends ViewComponentOptions {
    private labelField;
    /**
     * 是否使用新版外观
     * 是否使用新版外观
     */
    isNew: nasl.core.Boolean;
    /**
     * 值
     * 用于标识地区选择的值
     */
    value: nasl.core.String;
    /**
     * 数据源
     * 展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑。
     */
    areaListprop: {
      province_list: {
        [key: string]: string;
      };
      city_list: {
        [key: string]: string;
      };
      county_list: {
        [key: string]: string;
      };
    };
    /**
     * 确认按钮文字
     */
    confirmButtonText: nasl.core.String;
    /**
     * 取消按钮文字
     */
    cancelButtonText: nasl.core.String;
    /**
     * 可见选项个数
     */
    visibleItemCount: nasl.core.Integer;
    /**
     * 显示列数
     * 显示列数，3-省市区，2-省市，1-省
     */
    columnsNum: nasl.core.Integer;
    /**
     * 对齐方式
     * 设置右侧内容的对齐方式
     */
    inputAlign: 'left' | 'center' | 'right';
    /**
     * 转换器
     * 将选中的值以选择的符号作为连接符，转为字符串格式；选择“json”则转为JSON字符串格式
     */
    converter: 'name' | 'code';
    /**
     * 点击遮罩层后关闭
     */
    closeOnClickOverlay: nasl.core.Boolean;
    /**
     * 只读
     * 正常显示，但禁止选择/输入
     */
    readonly: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 占位提示
     */
    placeholder: nasl.core.String;
    /**
     * 预览
     * 显示预览态
     */
    preview: nasl.core.Boolean;
    /**
     * 点击右上方完成按钮
     * 点击右上方完成按钮
     */
    onConfirm: (values: nasl.collection.List<{
      code: nasl.core.String;
      name: nasl.core.String;
    }>, index: nasl.collection.List<nasl.core.Integer>, value: nasl.core.String) => void;
    /**
     * 点击取消按钮时
     * 点击取消按钮时
     */
    onCancel: (event: nasl.ui.BaseEvent) => void;
    /**
     * 选项改变时触发
     * 选项改变时触发
     */
    onChange: (event: nasl.ui.BaseEvent) => void;
    /**
     * 组件插槽
     * 标题
     */
    slotTitle: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义
     */
    'slot-pannel-title': () => Array<ViewComponent>;
    slotPannelTitle: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义选择器顶部内容
     */
    'slot-picker-top': () => Array<ViewComponent>;
    slotPickerTop: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义选择器底部内容
     */
    'slot-picker-bottom': () => Array<ViewComponent>;
    slotPickerBottom: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanBadge extends ViewComponent {
    /**
     * 徽章值
     */
    content: VanBadgeOptions['content'];
    constructor(options?: Partial<VanBadgeOptions>);
  }
  export class VanBadgeOptions extends ViewComponentOptions {
    /**
     * 徽章值
     */
    content: nasl.core.Decimal;
    /**
     * 徽章最大值
     * 徽章内容为数字时显示的最大值
     */
    max: nasl.core.Decimal;
    /**
     * 展示为小红点
     * 是否展示为小红点
     */
    dot: nasl.core.Boolean;
    /**
     * 插入徽章内容
     */
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanButton extends ViewComponent {
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    constructor(options?: Partial<VanButtonOptions>);
  }
  export class VanButtonOptions extends ViewComponentOptions {
    private to;
    /**
     * 替换
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    replace: nasl.core.Boolean;
    /**
     * 文本
     * 默认文本显示内容
     */
    text: nasl.core.String;
    /**
     * 样式类型
     * 设置按钮主题颜色与样式类型
     */
    type: 'info' | 'info_secondary' | 'default' | 'warning' | 'warning_secondary' | 'danger' | 'danger_secondary';
    /**
     * 展示方式
     * 选择行内或块级展示
     */
    block: 'spanb' | 'blockb';
    /**
     * 图标
     */
    icon: nasl.core.String;
    /**
     * 图标位置
     * 设置图标居左或居右显示
     */
    iconPosition: 'left' | 'right';
    /**
     * 链接类型
     */
    linkType: 'destination' | 'download';
    /**
     * 链接地址
     */
    hrefAndTo: nasl.core.String;
    /**
     * 打开方式
     * 父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则打开方式同当前窗口。
     */
    target: '_blank' | '_self' | '_parent' | '_top';
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 加载中
     * 是否显示为加载中
     */
    loading: nasl.core.Boolean;
    /**
     * 加载中文案
     */
    loadingText: nasl.core.String;
    /**
     * 尺寸
     * 设置按钮大小
     */
    size: 'large' | 'middle' | 'normal' | 'small' | 'mini';
    /**
     * 形状
     * 设置按钮形状
     */
    squareroud: 'square' | 'round';
    /**
     * 显示为细边框
     * 是否显示为细边框
     */
    hairline: nasl.core.Boolean;
    /**
     * 点击后
     * 点击事件
     */
    onClick: (event: nasl.ui.BaseEvent) => void;
  }
}
declare namespace nasl.ui {
  export class VanCalendar extends ViewComponent {
    constructor(options?: Partial<VanCalendarOptions>);
    /**
     * 值
     */
    value: VanCalendarOptions['value'];
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     */
    readonly: nasl.core.Boolean;
    /**
     * 预览
     */
    preview: nasl.core.Boolean;
    /**
     * 日期重置
     * 将选中的日期重置到指定日期，未传参时会重置到默认日期
     */
    reset(): any;
  }
  export class VanCalendarOptions extends ViewComponentOptions {
    private labelField;
    private type;
    /**
     * 是否使用新版外观
     * 是否使用新版外观
     */
    isNew: nasl.core.Boolean;
    /**
     * 值
     * 用于标识日期选择的值
     */
    value: nasl.core.String | nasl.core.Date;
    /**
     * 最小日期
     * 最小日期，默认为一年前。
     */
    minDate: nasl.core.String | nasl.core.Date;
    /**
     * 最大日期
     * 最大日期，默认为一年后。
     */
    maxDate: nasl.core.String | nasl.core.Date;
    /**
     * 日历标题
     */
    title: nasl.core.String;
    /**
     * 对齐方式
     * 设置右侧内容的对齐方式
     */
    inputAlign: 'left' | 'center' | 'right';
    /**
     * 点击遮罩层后关闭
     */
    closeOnClickOverlay: nasl.core.Boolean;
    /**
     * 只读
     * 正常显示，但禁止选择/输入
     */
    readonly: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 占位提示
     */
    placeholder: nasl.core.String;
    /**
     * 预览
     * 显示预览态
     */
    preview: nasl.core.Boolean;
    /**
     * 确认
     * 点击完成按钮时触发的事件
     */
    onConfirm: (event: nasl.core.Date) => void;
    /**
     * 点击
     * 点击并选中任意日期时触发
     */
    onSelect: (event: nasl.core.Date) => void;
    /**
     * 取消
     * 点击完成取消时触发的事件
     */
    onCancel: (event: nasl.ui.BaseEvent) => void;
    /**
     * 组件插槽
     * 标题
     */
    slotTitle: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义
     */
    'slot-pannel-title': () => Array<ViewComponent>;
    slotPannelTitle: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义选择器顶部内容
     */
    'slot-picker-top': () => Array<ViewComponent>;
    slotPickerTop: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义选择器底部内容
     */
    'slot-picker-bottom': () => Array<ViewComponent>;
    slotPickerBottom: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanCapsules<M extends nasl.core.Boolean> extends ViewComponent {
    /**
     * 选中值
     */
    value: VanCapsulesOptions<M>['value'];
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     */
    readonly: nasl.core.Boolean;
    constructor(options?: Partial<VanCapsulesOptions<M>>);
  }
  export class VanCapsulesOptions<M extends nasl.core.Boolean> extends ViewComponentOptions {
    /**
     * 选中值
     * 当前选中的值
     */
    value: M extends true ? nasl.collection.List<nasl.core.String | nasl.core.Integer | nasl.core.Decimal | nasl.core.Boolean> : (nasl.core.String | nasl.core.Integer | nasl.core.Decimal | nasl.core.Boolean);
    /**
     * 可取消
     * 是否可以取消选择
     */
    cancelable: nasl.core.Boolean;
    /**
     * 可多选
     * 是否可以多选
     */
    multiple: nasl.core.Boolean;
    /**
     * 只读
     * 正常显示，但禁止选择/输入
     */
    readonly: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 选择后
     * 选择某一项时触发
     */
    onSelect: (event: {
      value: any;
    }) => void;
    /**
     * 改变后
     * 选择值改变时触发
     */
    onChange: (event: {
      value: any;
    }) => void;
    /**
     * 插入`<van-capsules-item>`或`<van-capsules-group>`子组件。
     */
    slotDefault: () => Array<VanCapsulesItem | VanCapsulesGroup>;
  }
  export class VanCapsulesItem extends ViewComponent {
    /**
     * 选中值
     */
    value: VanCapsulesItemOptions['value'];
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    constructor(options?: Partial<VanCapsulesItemOptions>);
  }
  export class VanCapsulesItemOptions extends ViewComponentOptions {
    /**
     * 值
     * 此项的值
     */
    value: nasl.core.String | nasl.core.Integer | nasl.core.Decimal | nasl.core.Boolean;
    /**
     * 标签
     * 顶部自定义提示文本
     */
    label: nasl.core.String;
    /**
     * flag标志
     * 是否右上角有flag标志
     */
    flag: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 插入文本或 HTML。
     */
    slotDefault: () => Array<ViewComponent>;
  }
  export class VanCapsulesGroup extends ViewComponent {
    constructor(options?: Partial<VanCapsulesGroupOptions>);
  }
  export class VanCapsulesGroupOptions extends ViewComponentOptions {
    /**
     * 插入`<van-capsules-item>`子组件。
     */
    slotDefault: () => Array<VanCapsulesItem>;
  }
}
declare namespace nasl.ui {
  export class VanCardu extends ViewComponent {
    constructor(options?: Partial<VanCarduOptions>);
  }
  export class VanCarduOptions extends ViewComponentOptions {
    /**
     * 链接类型
     */
    linkType: 'destination' | 'download';
    /**
     * 链接地址
     */
    hrefAndTo: nasl.core.String;
    /**
     * 打开方式
     * 父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则打开方式同当前窗口。
     */
    target: '_blank' | '_self' | '_parent' | '_top';
    private width;
    /**
     * 图片风格
     */
    sr: 's' | 'r';
    /**
     * 卡片阴影
     */
    shadow: nasl.core.Boolean;
    /**
     * 卡片边框
     */
    border: nasl.core.Boolean;
    /**
     * 分割线
     */
    split: nasl.core.Boolean;
    /**
     * 点击后
     * 点击事件
     */
    onClick: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => void;
    /**
     * 插入默认的元素
     */
    slotDefault: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 插入图片
     */
    slotCover: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 标题
     */
    slotHead: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanCascader<T, V> extends ViewComponent {
    constructor(options?: Partial<VanCascaderOptions<T, V>>);
    /**
     * 数据
     */
    data: nasl.collection.List<T>;
    /**
     * 选中值
     */
    value: VanCascaderOptions<T, V>['value'];
    /**
     * 过滤文本
     */
    filterText: nasl.core.String;
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     */
    readonly: nasl.core.Boolean;
  }
  export class VanCascaderOptions<T, V> extends ViewComponentOptions {
    private labelField;
    /**
     * 树形模式
     * 将平铺数据转为树形结构数据
     */
    treeDisplay: nasl.core.Boolean;
    /**
     * 值
     * 用于标识级联选择的值
     */
    value: V;
    /**
     * 数据源
     * 展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑。
     */
    dataSource: nasl.collection.List<T> | {
      total: nasl.core.Integer;
      list: nasl.collection.List<T>;
    };
    /**
     * 数据类型
     * 数据源返回的数据结构的类型，自动识别类型进行展示说明。
     */
    dataSchema: T;
    /**
     * 文本字段名
     * 文本的字段名
     */
    textField: (item: T) => any;
    /**
     * 值字段名
     * 选项值的字段名
     */
    valueField: (item: T) => V;
    /**
     * 父级值字段名
     */
    parentField: (item: T) => any;
    /**
     * 子级值字段名
     */
    childrenField: (item: T) => any;
    /**
     * 占位提示
     */
    placeholder: nasl.core.String;
    /**
     * 顶部栏标题
     */
    title: nasl.core.String;
    /**
     * 未选中提示文案
     */
    tabPlaceholder: nasl.core.String;
    /**
     * 对齐方式
     * 设置右侧内容的对齐方式
     */
    inputAlign: 'left' | 'center' | 'right';
    /**
     * 开启搜索框
     * 是否开启搜索框进行过滤
     */
    filterable: nasl.core.Boolean;
    /**
     * 点击遮罩层后关闭
     * 是否开启点击遮罩层后关闭
     */
    closeOnClickOverlay: nasl.core.Boolean;
    /**
     * 只读
     * 正常显示，但禁止选择/输入
     */
    readonly: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 全部选项选择完成后触发
     * 全部选项选择完成后触发
     */
    onFinish: (event: {
      value: V;
    }) => void;
    /**
     * 选中项变化时触发
     * 选中项变化时触发
     */
    onChange: (event: {
      value: V;
    }) => void;
    /**
     * 组件插槽
     */
    slotOption: (current: Current<T>) => Array<ViewComponent>;
    /**
     * 组件插槽
     */
    slotTitle: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义选择器顶部内容
     */
    'slot-picker-top': () => Array<ViewComponent>;
    slotPickerTop: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义选择器底部内容
     */
    'slot-picker-bottom': () => Array<ViewComponent>;
    slotPickerBottom: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanCellGroup extends ViewComponent {
    constructor(options?: Partial<VanCellGroupOptions>);
  }
  export class VanCellGroupOptions extends ViewComponentOptions {
    /**
     * 卡片风格
     * 是否显示为卡片风格
     */
    inset: nasl.core.Boolean;
    /**
     * 插入`<van-cell>`子组件。
     */
    slotDefault: () => Array<ViewComponent>;
  }
  export class VanCell extends ViewComponent {
    /**
     * 值
     */
    value: VanCellOptions['value'];
    constructor(options?: Partial<VanCellOptions>);
  }
  export class VanCellOptions extends ViewComponentOptions {
    private title;
    private rtitle;
    private label;
    /**
     * 值
     * 用于标识单元格的值
     */
    value: nasl.core.String;
    /**
     * 箭头图标
     * 是否显示箭头图标
     */
    isLink: nasl.core.Boolean;
    /**
     * 箭头方向
     */
    arrowDirection: 'left' | 'up' | 'down' | 'right';
    /**
     * 垂直居中
     * 是否垂直居中展示
     */
    center: nasl.core.Boolean;
    /**
     * 图标
     */
    icon: nasl.core.String;
    /**
     * 链接类型
     */
    linkType: 'destination' | 'download';
    /**
     * 链接地址
     */
    hrefAndTo: nasl.core.String;
    /**
     * 打开方式
     * 父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则打开方式同当前窗口。
     */
    target: '_blank' | '_self' | '_parent' | '_top';
    /**
     * 点击后
     * 点击某一项后触发
     */
    onClick: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => void;
    /**
     * 组件插槽
     * 插入文本或 HTML。
     */
    slotDefault: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 插入文本或 HTML。
     */
    slotTitle: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 右侧图标。
     */
    private slotRightIcon;
  }
}
declare namespace nasl.ui {
  export class VanCheckboxGroup<T, V, C> extends ViewComponent {
    constructor(options?: Partial<VanCheckboxGroupOptions<T, V, C>>);
    /**
     * 全选中
     */
    allChecked: nasl.core.Boolean;
    /**
     * 选中值
     */
    value: VanCheckboxGroupOptions<T, V, C>['value'];
    /**
     * 数据
     */
    data: nasl.collection.List<T>;
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 预览
     */
    preview: nasl.core.Boolean;
  }
  export class VanCheckboxGroupOptions<T, V, C> extends ViewComponentOptions {
    /**
     * 数据源
     * 展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑。
     */
    dataSource: nasl.collection.List<T> | {
      total: nasl.core.Integer;
      list: nasl.collection.List<T>;
    };
    /**
     * 数据类型
     * 数据源返回的数据结构的类型，自动识别类型进行展示说明。
     */
    dataSchema: T;
    /**
     * 值
     * 用于标识多选组的值
     */
    value: C extends (nasl.core.StringLiteral<`none`> | nasl.core.StringLiteral<``>) ? nasl.collection.List<V> : nasl.core.String;
    /**
     * 最大可选数量
     * 最大可选数量(0为不限制)
     */
    max: nasl.core.Integer;
    /**
     * 最小可选数量
     * 最小可选数量(0为不限制)
     */
    min: nasl.core.Integer;
    /**
     * 值字段
     * 用于标识选中值的字段
     */
    valueField: (item: T) => V;
    /**
     * 排列方向
     * 设置多选组的排列方向
     */
    direction: 'horizontal' | 'vertical';
    /**
     * 排列数
     * 水平排列时每行展示的选项数量
     */
    column: nasl.core.Integer;
    /**
     * 转换器
     * 将选中的值以选择的符号作为连接符，转为字符串格式；选择“json”则转为JSON字符串格式。
     */
    converter: 'join' | 'join:|' | 'join:;' | 'json' | 'none';
    /**
     * 禁用
     * 正常显示，但禁止选择/输入
     */
    disabled: nasl.core.Boolean;
    /**
     * 预览
     * 显示预览态
     */
    preview: nasl.core.Boolean;
    /**
     * 值改变
     * 选择值改变时触发
     */
    onChange: (event: {
      value: nasl.collection.List<V>;
    }) => void;
    /**
     * 组件插槽
     * 插入`<van-checkbox>`子组件。
     */
    slotDefault: () => Array<VanCheckbox<V>>;
    /**
     * 组件插槽
     * 自定义选项的结构和样式
     */
    slotItem: (current: Current<T>) => Array<ViewComponent>;
  }
  export class VanCheckbox<V> extends ViewComponent {
    /**
     * 选中
     */
    value: nasl.core.Boolean;
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     */
    readonly: nasl.core.Boolean;
    constructor(options?: Partial<VanCheckboxOptions<V>>);
  }
  export class VanCheckboxOptions<V> extends ViewComponentOptions {
    private title;
    /**
     * 选中值
     * 当前选中的值
     */
    label: V;
    /**
     * 形状
     * 选择多选项为方形或圆形
     */
    shape: 'square' | 'round';
    /**
     * 文本位置
     * 设置文本居左或居右放置
     */
    labelPosition: 'right' | 'left';
    /**
     * 选中
     * 是否选中选项
     */
    value: nasl.core.Boolean;
    /**
     * 禁用
     * 正常显示，但禁止选择/输入
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    readonly: nasl.core.Boolean;
    /**
     * 点击后
     * 点击某一项后触发
     */
    onClick: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => void;
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanCircle extends ViewComponent {
    /**
     * 值
     */
    value: VanCircleOptions['value'];
    constructor(options?: Partial<VanCircleOptions>);
  }
  export class VanCircleOptions extends ViewComponentOptions {
    private text;
    /**
     * 当前进度
     */
    value: nasl.core.Decimal;
    /**
     * 顺时针增加
     * 是否按照顺时针顺序增加
     */
    clockwise: nasl.core.Boolean;
    /**
     * 圆环直径
     * 设置圆环直径，单位为px。
     */
    size: nasl.core.Decimal;
    /**
     * 进度条颜色
     */
    color: nasl.core.String;
    /**
     * 轨道颜色
     */
    layerColor: nasl.core.String;
    /**
     * 填充颜色
     */
    fill: nasl.core.String;
    /**
     * 进度条宽度
     */
    strokeWidth: nasl.core.Decimal;
    /**
     * 默认
     * 显示的文本
     */
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanCollapse extends ViewComponent {
    /**
     * 值
     */
    value: VanCollapseOptions['value'];
    constructor(options?: Partial<VanCollapseOptions>);
  }
  export class VanCollapseOptions extends ViewComponentOptions {
    /**
     * 值
     * 用于标识折叠面板的值
     */
    value: nasl.core.String | nasl.core.Integer | nasl.collection.List<nasl.core.String | nasl.core.Integer>;
    /**
     * 手风琴模式
     * 是否开启手风琴模式
     */
    accordion: nasl.core.Boolean;
    /**
     * 切换时
     * 切换时
     */
    onChange: (event: nasl.core.String) => void;
    /**
     * 插入`<van-collapse-item>`子组件。
     */
    slotDefault: () => Array<ViewComponent>;
  }
  export class VanCollapseItem extends ViewComponent {
    /**
     * 切换展开状态，传 true 为展开，false 为收起，不传参为切换
     * 切换展开状态，传 true 为展开，false 为收起，不传参为切换
     * @param expanded - '展开'
     */
    toggle(expanded?: nasl.core.Boolean): any;
    constructor(options?: Partial<VanCollapseItemOptions>);
  }
  export class VanCollapseItemOptions extends ViewComponentOptions {
    private title;
    /**
     * 值
     * 用于标识面板项的值
     */
    name: nasl.core.String | nasl.core.Integer;
    /**
     * 箭头图标
     * 是否显示箭头图标
     */
    isLink: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 展开
     * 展开
     */
    onOpen: (event: nasl.ui.BaseEvent) => void;
    /**
     * 收起
     * 收起
     */
    onClose: (event: nasl.ui.BaseEvent) => void;
    /**
     * 组件插槽
     * 标题
     */
    slotTitle: () => Array<ViewComponent>;
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanDatetimePicker extends ViewComponent {
    constructor(options?: Partial<VanDatetimePickerOptions>);
    /**
     * 值
     */
    value: VanDatetimePickerOptions['value'];
    /**
     * 起始值
     */
    startValue: VanDatetimePickerOptions['startValue'];
    /**
     * 结束值
     */
    endValue: VanDatetimePickerOptions['endValue'];
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     */
    readonly: nasl.core.Boolean;
    /**
     * 预览
     */
    preview: nasl.core.Boolean;
    /**
     * 打开
     */
    open(): any;
    /**
     * 关闭
     */
    close(): any;
  }
  export class VanDatetimePickerOptions extends ViewComponentOptions {
    private labelField;
    /**
     * 时间类型
     * 设置时间选择类型
     */
    type: 'time' | 'date' | 'datetime';
    /**
     * 最小单位
     */
    unit: 'date' | 'week' | 'month' | 'quarter' | 'year' | 'minute' | 'second';
    /**
     * 展示格式
     */
    showFormatter: 'YYYY年M月D日' | 'YYYY-MM-DD' | 'M/D/YYYY' | 'D/M/YYYY' | 'GGGG-W周' | 'GGGG年第W周' | 'GGGG-WWWW' | 'YYYY年M月' | 'YYYY-MM' | 'M/YYYY' | 'YYYY年第Q季度' | 'YYYY年QQ' | 'YYYY-QQ' | 'YYYY年' | 'YYYY' | 'HH:mm:ss' | 'HH时mm分ss秒' | 'HH:mm' | 'HH时mm分' | 'YYYY-MM-DD HH:mm:ss' | 'YYYY年M月D日 HH时mm分ss秒' | 'YYYY-MM-DD HH:mm HH:mm' | 'YYYY年M月D日 HH时mm分';
    /**
     * 高级格式化
     * 用来控制数字的展示格式
     */
    advancedFormatEnable: nasl.core.Boolean;
    /**
     * 高级格式化内容
     * 用来控制数字的展示格式
     */
    advancedFormatValue: nasl.core.String;
    /**
     * 区间选择
     * 是否支持区间选择
     */
    range: nasl.core.Boolean;
    /**
     * 起始值
     */
    startValue: nasl.core.String | nasl.core.DateTime | nasl.core.Date | nasl.core.Time;
    /**
     * 结束值
     */
    endValue: nasl.core.String | nasl.core.DateTime | nasl.core.Date | nasl.core.Time;
    /**
     * 是否使用新版外观
     * 是否使用新版外观
     */
    isNew: nasl.core.Boolean;
    /**
     * 值
     * 用于标识时间选择的值
     */
    value: nasl.core.String | nasl.core.DateTime | nasl.core.Date | nasl.core.Time;
    /**
     * 最小日期
     * 当时间选择类型为datetime时可选的最小时间，精确到分钟, 默认为十年前
     */
    minDate: nasl.core.String | nasl.core.DateTime | nasl.core.Date | nasl.core.Time;
    /**
     * 最大日期
     * 当时间选择类型为datetime时可选的最大时间，精确到分钟, 默认为十年后
     */
    maxDate: nasl.core.String | nasl.core.DateTime | nasl.core.Date | nasl.core.Time;
    /**
     * 最大小时
     * 当时间选择类型为 time 时
     */
    maxHour: nasl.core.Integer;
    /**
     * 最小小时
     * 当时间选择类型为 time 时
     */
    minHour: nasl.core.Integer;
    /**
     * 最大分钟
     * 当时间选择类型为 time 时
     */
    maxMinute: nasl.core.Integer;
    /**
     * 最小分钟
     * 当时间选择类型为 time 时
     */
    minMinute: nasl.core.Integer;
    /**
     * 转换器
     * 将选中的值以选择的符号作为连接符，转为字符串格式；选择“json”则转为JSON字符串格式
     */
    converter: 'format' | 'timestamp' | 'json' | 'date';
    private displayFormat;
    /**
     * 顶部栏标题
     */
    title: nasl.core.String;
    /**
     * 对齐方式
     * 设置右侧内容的对齐方式
     */
    inputAlign: 'left' | 'center' | 'right';
    /**
     * 点击遮罩层后关闭
     */
    closeOnClickOverlay: nasl.core.Boolean;
    /**
     * 只读
     * 正常显示，但禁止选择/输入
     */
    readonly: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 占位提示
     */
    placeholder: nasl.core.String;
    /**
     * 预览
     * 显示预览态
     */
    preview: nasl.core.Boolean;
    /**
     * 展示弹层
     */
    visible: nasl.core.Boolean;
    /**
     * 确认
     * 点击完成按钮时触发的事件
     */
    onConfirm: (event: nasl.core.String) => void;
    /**
     * 取消
     * 点击完成取消时触发的事件
     */
    onCancel: (event: nasl.ui.BaseEvent) => void;
    /**
     * 组件插槽
     * 标题
     */
    slotTitle: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 顶部
     */
    slotTop: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 底部
     */
    slotBottom: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义
     */
    'slot-pannel-title': () => Array<ViewComponent>;
    slotPannelTitle: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义选择器顶部内容
     */
    'slot-picker-top': () => Array<ViewComponent>;
    slotPickerTop: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义选择器底部内容
     */
    'slot-picker-bottom': () => Array<ViewComponent>;
    slotPickerBottom: () => Array<ViewComponent>;
  }
  export class VanDatetimePickerActionSlot extends ViewComponent {
    constructor(options?: Partial<VanDatetimePickerActionSlotOptions>);
  }
  export class VanDatetimePickerActionSlotOptions extends ViewComponentOptions {
    /**
     * 触发的事件名称
     */
    targetMethod: 'confirm' | 'cancel';
    /**
     * 组件插槽
     */
    slotDefault: () => Array<ViewComponent>;
  }
  export class VanPickerActionSlot extends ViewComponent {
    constructor(options?: Partial<VanPickerActionSlotOptions>);
  }
  export class VanPickerActionSlotOptions extends ViewComponentOptions {
    /**
     * 触发的事件名称
     */
    targetMethod: 'confirm' | 'cancel' | 'none';
    /**
     * 组件插槽
     * 内容自定义
     */
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanDialog extends ViewComponent {
    constructor(options?: Partial<VanDialogOptions>);
    /**
     * 展示弹窗
     */
    visible: nasl.core.Boolean;
    /**
     * 打开弹窗
     */
    openModal(): any;
    /**
     * 关闭弹窗
     */
    closeModal(): any;
  }
  export class VanDialogOptions extends ViewComponentOptions {
    private showConfirmButton;
    private showCancelButton;
    /**
     * 展示弹窗
     */
    value: nasl.core.Boolean;
    /**
     * 点击遮罩层后关闭
     */
    closeOnClickOverlay: nasl.core.Boolean;
    /**
     * 打开弹出层后
     * 打开弹出层时触发
     */
    onOpen: (event: nasl.ui.BaseEvent) => void;
    /**
     * 关闭弹出层后
     * 关闭弹出层时触发
     */
    onClose: (event: nasl.ui.BaseEvent) => void;
    /**
     * 组件插槽
     * 内容自定义
     */
    slotDefault: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 内容自定义
     */
    slotFooter: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanDivider extends ViewComponent {
    constructor(options?: Partial<VanDividerOptions>);
  }
  export class VanDividerOptions extends ViewComponentOptions {
    /**
     * 内容位置
     * 设置内容位置
     */
    contentPosition: 'center' | 'left' | 'right';
    private title;
    /**
     * 线条类型
     */
    dashed: 'b' | 'a';
    /**
     * 默认
     * 显示的文本
     */
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanDropdownMenu extends ViewComponent {
    /**
     * 打开状态
     */
    opened: nasl.core.Boolean;
    constructor(options?: Partial<VanDropdownMenuOptions>);
  }
  export class VanDropdownMenuOptions extends ViewComponentOptions {
    private value;
    private route;
    /**
     * 展开方向
     * 设置下拉菜单的展开方向
     */
    direction: 'up' | 'down';
    /**
     * 显示遮罩层
     */
    overlay: nasl.core.Boolean;
    /**
     * 点击遮罩层后关闭
     * 是否点击遮罩层后关闭菜单
     */
    closeOnClickOverlay: nasl.core.Boolean;
    /**
     * 插入`<van-dropdown-menu>`子组件。
     */
    slotDefault: () => Array<VanDropdownItem<any>>;
  }
  export class VanDropdownItem<T> extends ViewComponent {
    constructor(options?: Partial<VanDropdownItemOptions<T>>);
    /**
     * 切换菜单展示状态
     * @param show - '展示'
     */
    toggle(show?: nasl.core.Boolean): any;
  }
  export class VanDropdownItemOptions<T> extends ViewComponentOptions {
    /**
     * 数据源
     * 展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑。
     */
    dataSource: nasl.collection.List<T> | {
      total: nasl.core.Integer;
      list: nasl.collection.List<T>;
    };
    /**
     * 数据类型
     * 集合类型每一元素的数据类型
     */
    dataSchema: T;
    /**
     * 值
     * 用于标识菜单项的值
     */
    value: nasl.core.String;
    /**
     * 标题
     */
    title: nasl.core.String;
    /**
     * 点击菜单子项关闭
     * 是否通过点击菜单子项关闭
     */
    shutself: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 点击选项导致 value 变化时触发
     * 点击选项导致 value 变化时触发
     */
    onChange: (event: nasl.core.String) => void;
    /**
     * 打开菜单栏时触发
     * 打开菜单栏时触发
     */
    onOpen: (event: nasl.ui.BaseEvent) => void;
    /**
     * 关闭菜单栏时触发
     * 关闭菜单栏时触发
     */
    onClose: (event: nasl.ui.BaseEvent) => void;
    /**
     * 插入`<van-dropdown-item-son>`子组件。
     */
    slotDefault: () => Array<VanDropdownItemSon>;
    /**
     * 组件插槽
     * 自定义结构和样式
     */
    slotItem: (current: Current<T>) => Array<ViewComponent>;
  }
  export class VanDropdownItemSon extends ViewComponent {
    constructor(options?: Partial<VanDropdownItemSonOptions>);
  }
  export class VanDropdownItemSonOptions extends ViewComponentOptions {
    private rtitle;
    private label;
    /**
     * 值
     * 用于标识菜单子项的值
     */
    value: nasl.core.String;
    /**
     * 箭头
     * 是否显示箭头图标
     */
    isLink: nasl.core.Boolean;
    /**
     * 箭头方向
     * 设置箭头方向
     */
    arrowDirection: 'left' | 'up' | 'down' | 'right';
    /**
     * 垂直居中
     */
    center: nasl.core.Boolean;
    /**
     * 文本
     * 菜单子项的左侧文本
     */
    title: nasl.core.String;
    /**
     * 图标
     * 菜单子项的显示图标
     */
    icon: nasl.core.String;
    /**
     * 链接类型
     */
    linkType: 'destination' | 'download';
    /**
     * 链接地址
     */
    hrefAndTo: nasl.core.String;
    /**
     * 打开方式
     * 父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则打开方式同当前窗口。
     */
    target: '_blank' | '_self' | '_parent' | '_top';
    /**
     * 点击后
     * 点击某一项后触发
     */
    onClick: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => void;
    /**
     * 右侧文本
     * 插入文本或 HTML。
     */
    slotDefault: () => Array<ViewComponent>;
    /**
     * 标题
     * 文本
     */
    slotTitle: () => Array<ViewComponent>;
    /**
     * 右侧图标
     * 右侧图标。
     */
    private slotRightIcon;
  }
}
declare namespace nasl.ui {
  export class VanFieldinput extends ViewComponent {
    constructor(options?: Partial<VanFieldinputOptions>);
    /**
     * 值
     */
    value: VanFieldinputOptions['value'];
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     */
    readonly: nasl.core.Boolean;
    /**
     * 预览
     */
    preview: nasl.core.Boolean;
    /**
     * 让输入框获取焦点。
     */
    focus(): any;
    /**
     * 让输入框失去焦点。
     */
    blur(): any;
    /**
     * 清空输入框。
     */
    clear(): any;
  }
  export class VanFieldinputOptions extends ViewComponentOptions {
    private prefix;
    private suffix;
    /**
     * 值
     * 用于标识输入框的值
     */
    value: nasl.core.String;
    /**
     * 类型
     * 设置输入框的类型
     */
    type: 'text' | 'password' | 'integer' | 'rndinteger' | 'point' | 'card';
    /**
     * 占位符
     * 输入框为空的展示文字
     */
    placeholder: nasl.core.String;
    /**
     * 最大输入长度
     */
    maxlength: nasl.core.Integer;
    /**
     * 键盘标题
     */
    keyboardTitle: nasl.core.String;
    /**
     * 按钮内容
     * 设置完成按钮文字内容
     */
    confirmText: nasl.core.String;
    /**
     * 按钮尺寸
     * 设置完成按钮大小
     */
    confirmSize: 'default' | 'large';
    /**
     * 可清除
     * 是否在输入框内展示清除按钮
     */
    clearable: nasl.core.Boolean;
    /**
     * 只读
     * 正常显示，但禁止选择/输入。
     */
    readonly: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 输入框样式
     * 设置输入框样式
     */
    inputstyle: 'input' | 'password';
    /**
     * 键盘样式
     * 设置键盘样式
     */
    keytheme: 'native' | 'custom';
    /**
     * 定制键盘布局
     */
    keyboardTheme: 'default' | 'custom';
    /**
     * 预览
     * 显示预览态
     */
    preview: nasl.core.Boolean;
    /**
     * 输入时
     * 输入时触发。
     */
    onInput: (event: nasl.ui.BaseEvent) => void;
    /**
     * 改变后
     * 值变化时触发。（注意：与原生事件不同）
     */
    onChange: (event: nasl.core.String) => void;
    /**
     * 获得焦点
     * 获得焦点时触发。
     */
    onFocus: (event: nasl.ui.BaseEvent) => void;
    /**
     * 失去焦点
     * 失去焦点时触发。
     */
    onBlur: (event: nasl.ui.BaseEvent) => void;
    /**
     * 清空后
     * 清空后触发。
     */
    onClear: (event: nasl.ui.BaseEvent) => void;
    /**
     * 输入完成时
     * 输入完成时后触发。
     */
    onEnoughkey: (event: nasl.core.String) => void;
    /**
     * 点击完成按钮时
     * 点击定制键盘完成按钮时触发。
     */
    onClickConfirm: (event: nasl.core.String) => void;
  }
}
declare namespace nasl.ui {
  export class VanFieldtextarea extends ViewComponent {
    constructor(options?: Partial<VanFieldtextareaOptions>);
    /**
     * 值
     */
    value: VanFieldtextareaOptions['value'];
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     */
    readonly: nasl.core.Boolean;
    /**
     * 预览
     */
    preview: nasl.core.Boolean;
    /**
     * 让输入框获取焦点。
     */
    focus(): any;
    /**
     * 让输入框失去焦点。
     */
    blur(): any;
    /**
     * 清空输入框。
     */
    clear(): any;
  }
  export class VanFieldtextareaOptions extends ViewComponentOptions {
    private prefix;
    private suffix;
    /**
     * 值
     * 用于标识多行输入的值
     */
    value: nasl.core.String;
    /**
     * 占位符
     * 输入框为空的显示文字
     */
    placeholder: nasl.core.String;
    /**
     * 最大字符数
     * 输入框内可输入的最大字符数，超过时不支持输入。
     */
    maxlength: nasl.core.Integer;
    /**
     * 显示字数统计
     * 设置是否显示「可输入最大字符数」的字数统计
     */
    showWordLimit: nasl.core.Boolean;
    /**
     * 自适应内容高度
     * 可输入如{maxHeight:100,minHeight:50}，单位默认为px。
     */
    autosize: nasl.core.Boolean | {
      maxHeight: nasl.core.Integer;
      minHeight: nasl.core.Integer;
    };
    /**
     * 可清除
     * 是否在输入框内展示清除按钮
     */
    clearable: nasl.core.Boolean;
    /**
     * 只读
     * 正常显示，但禁止选择/输入
     */
    readonly: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 预览
     * 显示预览态
     */
    preview: nasl.core.Boolean;
    /**
     * 输入时
     * 输入时触发。
     */
    onInput: (event: nasl.ui.BaseEvent) => void;
    /**
     * 改变后
     * 值变化时触发。（注意：与原生事件不同）
     */
    onChange: (event: nasl.core.String) => void;
    /**
     * 获得焦点
     * 获得焦点时触发。
     */
    onFocus: (event: nasl.ui.BaseEvent) => void;
    /**
     * 失去焦点
     * 失去焦点时触发。
     */
    onBlur: (event: nasl.ui.BaseEvent) => void;
    /**
     * 清空后
     * 清空后触发。
     */
    onClear: (event: nasl.ui.BaseEvent) => void;
  }
}
declare namespace nasl.ui {
  export class VanForComponents<T> extends ViewComponent {
    constructor(options?: Partial<VanForComponentsOptions<T>>);
    /**
     * 数据
     */
    data: VanForComponentsOptions<T>['dataSource'];
  }
  export class VanForComponentsOptions<T> extends ViewComponentOptions {
    /**
     * 数据源
     * 展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑。
     */
    dataSource: nasl.collection.List<T> | {
      total: nasl.core.Integer;
      list: nasl.collection.List<T>;
    };
    /**
     * 数据类型
     * 数据源返回的数据结构的类型，自动识别类型进行展示说明。
     */
    dataSchema: T;
    /**
     * 排列项数
     * 设置每行排列项数，为空时自适应宽度，自动换行。
     */
    colnum: nasl.core.Decimal;
    /**
     * 自动换行
     * 是否自动换行，排列项数为空时生效。
     */
    wrap: nasl.core.Boolean;
    /**
     * 均分宽度
     * 是否均分宽度，排列项数不为空时生效。
     */
    equalWidth: nasl.core.Boolean;
    /**
     * 组件插槽
     * 内容自定义
     */
    slotDefault: (current?: Current<T>) => Array<ViewComponent>;
    /**
     * 组件插槽
     * 内容自定义
     */
    slotItem: (current: Current<T>) => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanForm extends ViewComponent {
    constructor(options?: Partial<VanFormOptions>);
    /**
     * 验证是否有效
     */
    valid: nasl.core.Boolean;
    /**
     * 组件插槽
     * 验证表单，支持传入 name 来验证单个或部分表单项
     * @param name - '可选。需要验证的表单项 name'
     */
    validate(name?: nasl.core.String | nasl.collection.List<nasl.core.String>): nasl.ui.ValidateResult;
  }
  export class VanFormOptions extends ViewComponentOptions {
    private labelAlign;
    private inputAlign;
    /**
     * 验证通过
     * 提交表单且验证通过后触发
     */
    onSubmit: (event: {}) => void;
    /**
     * 验证不通过
     * 提交表单且验证不通过后触发
     */
    onFailed: (event: {
      values: {};
    }) => void;
    /**
     * 组件插槽
     * 插入`<van-field>`子组件。
     */
    slotDefault: () => Array<ViewComponent>;
  }
  export class VanField extends ViewComponent {
    /**
     * 验证是否有效
     */
    valid: nasl.core.Boolean;
    constructor(options?: Partial<VanFieldOptions>);
  }
  export class VanFieldOptions extends ViewComponentOptions {
    private value;
    private name;
    private type;
    private label;
    private size;
    private placeholder;
    /**
     * 标签布局
     */
    labelLayout: 'inline' | 'block';
    /**
     * 必填标记
     */
    required: nasl.core.Boolean;
    /**
     * 验证规则
     * 设置验证规则，简写格式为字符串类型，完整格式或混合格式为数组类型
     */
    rules: nasl.collection.List<nasl.core.String>;
    /**
     * 显示底边框
     * 是否显示底边框
     */
    border: nasl.core.Boolean;
    /**
     * 组件插槽
     * 插入自定义输入框
     */
    slotInput: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * label 自定义
     */
    slotTitle: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 左侧图标
     */
    'slot-left-icon': () => Array<ViewComponent>;
    slotLeftIcon: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanGallery<T> extends ViewComponent {
    /**
     * 数据
     */
    data: nasl.collection.List<T>;
    constructor(options?: Partial<VanGalleryOptions<T>>);
  }
  export class VanGalleryOptions<T> extends ViewComponentOptions {
    /**
     * 数据源
     * 展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑。
     */
    dataSource: nasl.collection.List<T> | {
      total: nasl.core.Integer;
      list: nasl.collection.List<T>;
    };
  }
}
declare namespace nasl.ui {
  export class VanIconv extends ViewComponent {
    constructor(options?: Partial<VanIconvOptions>);
  }
  export class VanIconvOptions extends ViewComponentOptions {
    /**
     * 图标
     */
    name: nasl.core.String;
    /**
     * 布局类型
     * 设置图标布局类型
     */
    icotype: 'only' | 'top' | 'left';
    /**
     * 链接类型
     */
    linkType: 'destination' | 'download';
    /**
     * 链接地址
     */
    hrefAndTo: nasl.core.String;
    /**
     * 打开方式
     * 父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则打开方式同当前窗口。
     */
    target: '_blank' | '_self' | '_parent' | '_top';
    /**
     * 点击后
     * 点击此项时触发
     */
    onClick: (event: nasl.ui.BaseEvent) => void;
    /**
     * 插入文本或HTML
     */
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanImage extends ViewComponent {
    /**
     * 地址
     */
    src: VanImageOptions['src'];
    /**
     * 默认图地址
     */
    placeholderSrc: VanImageOptions['placeholderSrc'];
    /**
     * 预览状态
     */
    preview: nasl.core.Boolean;
    constructor(options?: Partial<VanImageOptions>);
  }
  export class VanImageOptions extends ViewComponentOptions {
    /**
     * 加载样式
     */
    loadingType: 'loading' | 'none' | 'placeholder';
    /**
     * 默认图地址
     */
    placeholderSrc: nasl.core.String;
    /**
     * 图片地址
     */
    src: nasl.core.String;
    /**
     * 填充方式
     * 设置图片的填充方式
     */
    fit: 'contain' | 'scale-down' | 'none' | 'fill' | 'cover';
    /**
     * 图片风格
     * 选择图片为方形或圆形
     */
    sr: 's' | 'r';
    /**
     * 点击放大
     * 是否支持点击放大全屏展示
     */
    preview: nasl.core.Boolean;
    /**
     * 点击后
     * 点击此项时触发
     */
    onClick: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => void;
  }
}
declare namespace nasl.ui {
  export class VanLinearLayout extends ViewComponent {
    constructor(options?: Partial<VanLinearLayoutOptions>);
    /**
     * 打开加载中
     * 打开加载中
     */
    openLoading(): any;
    /**
     * 关闭加载中
     * 关闭加载中
     */
    closeLoading(): any;
  }
  export class VanLinearLayoutOptions extends ViewComponentOptions {
    private display;
    /**
     * 内容间隙
     * 内容块间隙大小
     */
    gap: 'shrink' | 'none' | 'mini' | 'small' | 'large' | 'normal';
    /**
     * 子元素展示方式
     * 设置子元素行内展示或块级换行展示
     */
    layout: 'none' | 'inline' | 'block';
    /**
     * 加载中图标
     * 加载状态中显示的图标
     */
    loadingIcon: nasl.core.String;
    /**
     * 加载中图标旋转
     * 设置加载中图标是否旋转，默认开启。
     */
    loadingIconRotate: nasl.core.Boolean;
    /**
     * 加载中文案
     * 加载状态中显示的文案
     */
    loadingText: nasl.core.String;
    /**
     * 布局模式
     * 设置布局模式
     */
    mode: 'inline' | 'block' | 'flex';
    /**
     * 主轴方向
     */
    direction: 'horizontal' | 'vertical';
    /**
     * 横轴对齐
     */
    justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
    /**
     * 纵轴对齐
     */
    alignment: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
    _alignment: 'start' | 'center' | 'end' | 'stretch';
    _justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
    /**
     * 换行
     * 弹性布局下子元素总宽度超出父级时子元素是否换行展示
     */
    wrap: nasl.core.Boolean;
    /**
     * 点击后
     * 点击此项时触发
     */
    onClick: (event: nasl.ui.BaseEvent) => void;
    /**
     * 内容
     */
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanMyProcess extends ViewComponent {
    constructor(options?: Partial<VanMyProcessOptions>);
  }
  export class VanMyProcessOptions extends ViewComponentOptions {}
}
declare namespace nasl.ui {
  export class VanNoticeBar extends ViewComponent {
    constructor(options?: Partial<VanNoticeBarOptions>);
  }
  export class VanNoticeBarOptions extends ViewComponentOptions {
    private text;
    /**
     * 类型
     * 设置通知栏类型
     */
    mode: 'closeable' | 'link' | 'normal';
    /**
     * 开启滚动播放
     */
    scrollable: nasl.core.Boolean;
    /**
     * 开启文本换行
     * 关闭滚动播放时该属性即可生效
     */
    wrapable: nasl.core.Boolean;
    /**
     * 链接类型
     */
    linkType: 'destination' | 'download';
    /**
     * 链接地址
     */
    hrefAndTo: nasl.core.String;
    /**
     * 打开方式
     * 父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则打开方式同当前窗口。
     */
    target: '_blank' | '_self' | '_parent' | '_top';
    /**
     * 点击通知栏时触发
     * 点击通知栏时触发
     */
    onClick: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => void;
    /**
     * 关闭通知栏时触发
     * 关闭通知栏时触发
     */
    onClose: (event: nasl.ui.BaseEvent) => void;
    /**
     * 点击链接
     * 点击链接
     */
    onRout: (event: nasl.ui.BaseEvent) => void;
    /**
     * 文本插槽
     */
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanPickerson<T, V, M extends nasl.core.Boolean, P extends nasl.core.Boolean, C> extends ViewComponent {
    constructor(options?: Partial<VanPickersonOptions<T, V, M, P, C>>);
    /**
     * 选中值
     */
    value: VanPickersonOptions<T, V, M, P, C>['value'];
    /**
     * 数据
     */
    data: nasl.collection.List<T>;
    /**
     * 当前页数
     */
    page: nasl.core.Integer;
    /**
     * 当前页数
     */
    size: nasl.core.Integer;
    /**
     * 过滤文本
     */
    filterText: nasl.core.String;
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     */
    readonly: nasl.core.Boolean;
    /**
     * 预览
     */
    preview: nasl.core.Boolean;
    /**
     * 重新加载数据
     */
    reload(): any;
    /**
     * 打开选择器
     */
    open(): any;
    /**
     * 关闭选择器
     */
    close(): any;
  }
  export class VanPickersonOptions<T, V, M extends nasl.core.Boolean, P extends nasl.core.Boolean, C> extends ViewComponentOptions {
    private labelField;
    private defaultIndex;
    /**
     * 是否使用新版外观
     */
    isNew: nasl.core.Boolean;
    /**
     * 值
     * 用于标识选择器的值
     */
    value: M extends true ? (C extends '' ? nasl.collection.List<V> : nasl.core.String) : V;
    /**
     * 数据源
     * 展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑
     */
    dataSource: nasl.collection.List<T> | {
      total: nasl.core.Integer;
      list: nasl.collection.List<T>;
    };
    /**
     * 数据类型
     * 集合类型每一元素的数据类型
     */
    dataSchema: T;
    /**
     * 文本字段
     * 选项文本的字段名
     */
    textField: (item: T) => any;
    /**
     * 动态选项插槽
     * 自定义选项内容
     */
    optionIsSlot: nasl.core.Boolean;
    /**
     * 值字段
     * 选项值的字段名
     */
    valueField: (item: T) => V;
    /**
     * 默认每页条数
     */
    pageSize: nasl.core.Decimal;
    /**
     * 初始化排序规则
     * 设置数据初始化时的排序字段和顺序规则
     */
    sorting: {
      field: nasl.core.String;
      order: nasl.core.String;
    };
    /**
     * 匹配方法
     * 设置过滤时的匹配方法
     */
    matchMethod: 'includes' | 'startsWith' | 'endsWith';
    /**
     * 分页加载更多
     * 设置是否分页加载更多
     */
    pageable: nasl.core.Boolean;
    /**
     * 列表样式
     * 设置列表样式，仅列表展示时支持多选
     */
    type: 'picker' | 'list';
    /**
     * 占位提示
     */
    placeholder: nasl.core.String;
    /**
     * 工具栏标题
     */
    title: nasl.core.String;
    /**
     * 确认按钮文字
     */
    confirmButtonText: nasl.core.String;
    /**
     * 取消按钮文字
     */
    cancelButtonText: nasl.core.String;
    /**
     * 可见选项个数
     * 设置可见选项个数
     */
    visibleItemCount: nasl.core.Integer;
    /**
     * 对齐方式
     * 设置右侧内容的对齐方式
     */
    inputAlign: 'left' | 'center' | 'right';
    /**
     * 显示工具栏
     */
    showToolbar: nasl.core.Boolean;
    /**
     * 转换器
     * 将选中的值以选择的符号作为连接符，转为字符串格式；选择“json”则转为JSON字符串格式。
     */
    converter: '' | 'join' | 'join:|' | 'join:;' | 'json';
    /**
     * 支持筛选
     * 设置是否支持筛选，开启将会支持搜索。
     */
    filterable: nasl.core.Boolean;
    /**
     * 可多选
     */
    multiple: nasl.core.Boolean;
    /**
     * 全选
     */
    enableSelectAll: nasl.core.Boolean;
    /**
     * 已选中项数
     * 是否显示当前已选中项数
     */
    enableSelectedCount: nasl.core.Boolean;
    /**
     * 点击遮罩层后关闭
     */
    closeOnClickOverlay: nasl.core.Boolean;
    /**
     * 初始加载
     * 是否在初始时立即加载
     */
    initialLoad: nasl.core.Boolean;
    /**
     * 只读
     * 正常显示，但禁止选择/输入
     */
    readonly: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 可清除
     * 可点击清除按钮一键清除所选内容
     */
    clearable: nasl.core.Boolean;
    private clearFilter;
    /**
     * 预览
     * 显示预览态
     */
    preview: nasl.core.Boolean;
    /**
     * 点击完成按钮时触发
     * 回调参数：选中值，选中值对应的索引
     */
    onConfirm: (event: M extends true ? nasl.collection.List<V> : V) => void;
    /**
     * 点击取消按钮时触发
     * 回调参数：选中值，选中值对应的索引
     */
    onCancel: (event: nasl.ui.BaseEvent) => void;
    /**
     * 选项改变时触发
     * 回调参数：Picker 实例，选中值，选中值对应的索引
     */
    onChange: (event: nasl.ui.BaseEvent) => void;
    /**
     * 组件插槽
     * option
     */
    slotOption: (current: Current<T>) => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义标题
     */
    slotTitle: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义
     */
    'slot-pannel-title': () => Array<ViewComponent>;
    slotPannelTitle: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义选择器顶部内容
     */
    'slot-picker-top': () => Array<ViewComponent>;
    slotPickerTop: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义选择器底部内容
     */
    'slot-picker-bottom': () => Array<ViewComponent>;
    slotPickerBottom: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanPopover extends ViewComponent {
    openModal(): any;
    closeModal(): any;
    constructor(options?: Partial<VanPopoverOptions>);
  }
  export class VanPopoverOptions extends ViewComponentOptions {
    value: nasl.core.Boolean;
    overlay: nasl.core.Boolean;
    closeOnClickAction: nasl.core.Boolean;
    theme: 'dark' | 'light';
    placement: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
    onSelect: (event: nasl.ui.BaseEvent) => void;
    onOpen: (event: nasl.ui.BaseEvent) => void;
    onClose: (event: nasl.ui.BaseEvent) => void;
    slotDefault: () => Array<VanPopoverItem>;
  }
  export class VanPopoverItem extends ViewComponent {
    constructor(options?: Partial<VanPopoverItemOptions>);
  }
  export class VanPopoverItemOptions extends ViewComponentOptions {
    text: nasl.core.String;
    disabled: nasl.core.Boolean;
    onClick: (event: nasl.ui.BaseEvent) => any;
  }
}
declare namespace nasl.ui {
  export class VanPopup extends ViewComponent {
    constructor(options?: Partial<VanPopupOptions>);
    /**
     * 展示抽屉
     */
    visible: nasl.core.Boolean;
    /**
     * 打开抽屉
     */
    openModal(): any;
    /**
     * 关闭抽屉
     */
    closeModal(): any;
  }
  export class VanPopupOptions extends ViewComponentOptions {
    /**
     * 展示弹层
     */
    value: nasl.core.Boolean;
    /**
     * 弹出位置
     * 设置弹出位置
     */
    position: 'top' | 'bottom' | 'right' | 'left';
    /**
     * 点击遮罩层后关闭
     */
    closeOnClickOverlay: nasl.core.Boolean;
    /**
     * 点击抽屉
     * 点击抽屉时触发
     */
    onClick: (event: nasl.ui.BaseEvent) => void;
    /**
     * 点击遮罩层
     * 点击遮罩层时触发
     */
    onClickOverlay: (event: nasl.ui.BaseEvent) => void;
    /**
     * 打开抽屉后
     * 打开抽屉时触发
     */
    onOpen: (event: nasl.ui.BaseEvent) => void;
    /**
     * 关闭抽屉后
     * 关闭抽屉时触发
     */
    onClose: (event: nasl.ui.BaseEvent) => void;
    /**
     * 内容自定义
     */
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanProcessButton extends ViewComponent {
    constructor(options?: Partial<VanProcessButtonOptions>);
  }
  export class VanProcessButtonOptions extends ViewComponentOptions {
    /**
     * 操作成功响应方式
     */
    linkType: 'destination';
    /**
     * 链接地址
     */
    hrefAndTo: nasl.core.String;
    /**
     * 链接打开方式
     * 链接跳转的打开方式，父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则其打开方式同当前窗口。
     */
    target: '_blank' | '_self' | '_parent' | '_top';
    /**
     * 更多气泡弹出位置
     * 设置更多选项的气泡弹出位置
     */
    placement: 'top-start' | 'bottom-start';
  }
}
declare namespace nasl.ui {
  export class VanProcessInfo extends ViewComponent {
    constructor(options?: Partial<VanProcessInfoOptions>);
  }
  export class VanProcessInfoOptions extends ViewComponentOptions {}
}
declare namespace nasl.ui {
  export class VanProcessRecord extends ViewComponent {
    constructor(options?: Partial<VanProcessRecordOptions>);
  }
  export class VanProcessRecordOptions extends ViewComponentOptions {
    /**
     * 展示类型
     */
    type: 'list' | 'timeline';
  }
}
declare namespace nasl.ui {
  export class VanProgress extends ViewComponent {
    /**
     * 值
     */
    value: VanProgressOptions['value'];
    constructor(options?: Partial<VanProgressOptions>);
  }
  export class VanProgressOptions extends ViewComponentOptions {
    /**
     * 值
     * 用于标识进度条的值
     */
    value: nasl.core.Decimal;
    /**
     * 文字内容
     * 进度条中的显示文字
     */
    pivotText: nasl.core.String;
    /**
     * 显示文字
     * 是否显示进度条中的文字
     */
    showPivot: nasl.core.Boolean;
    /**
     * 自定义
     */
    custom: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    inactive: nasl.core.Boolean;
    /**
     * 进度条粗细
     * 设置进度条粗细，单位为px。
     */
    strokeWidth: nasl.core.Decimal;
    /**
     * 进度条颜色
     */
    color: nasl.core.String;
    /**
     * 轨道颜色
     */
    trackColor: nasl.core.String;
    /**
     * 文字颜色
     */
    textColor: nasl.core.String;
    /**
     * 文字背景色
     */
    pivotColor: nasl.core.String;
    /**
     * 默认
     * 显示的文本
     */
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanRadioGroup<T, V> extends ViewComponent {
    constructor(options?: Partial<VanRadioGroupOptions<T, V>>);
    /**
     * 选中值
     */
    value: VanRadioGroupOptions<T, V>['value'];
    /**
     * 数据
     */
    data: nasl.collection.List<T>;
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     */
    readonly: nasl.core.Boolean;
    /**
     * 预览
     */
    preview: nasl.core.Boolean;
  }
  export class VanRadioGroupOptions<T, V> extends ViewComponentOptions {
    /**
     * 数据源
     * 展示数据的输入源，可设置为集合类型变量（List<T>）或输出参数为集合类型的逻辑。
     */
    dataSource: nasl.collection.List<T> | {
      total: nasl.core.Integer;
      list: nasl.collection.List<T>;
    };
    /**
     * 数据类型
     * 数据源返回的数据结构的类型，自动识别类型进行展示说明。
     */
    dataSchema: T;
    /**
     * 值
     * 用于标识单选组的值
     */
    value: V;
    /**
     * 单选项图标
     */
    icon: nasl.core.String;
    /**
     * 排列方向
     * 选择水平或垂直排列
     */
    direction: 'horizontal' | 'vertical';
    /**
     * 每行排列数
     * 水平排列时每行展示的选项数量
     */
    column: nasl.core.Integer;
    /**
     * 禁用
     * 正常显示，但禁止选择/输入
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    readonly: nasl.core.Boolean;
    /**
     * 预览
     * 显示预览态
     */
    preview: nasl.core.Boolean;
    /**
     * 值改变时
     * 选择值改变时触发
     */
    onChange: (event: V) => void;
    /**
     * 组件插槽
     * 插入`<van-radio>`子组件。
     */
    slotDefault: () => Array<VanRadio<V>>;
    /**
     * 组件插槽
     * 自定义选项的结构和样式
     */
    slotItem: (current: Current<T>) => Array<ViewComponent>;
  }
  export class VanRadio<V> extends ViewComponent {
    /**
     * 选中
     */
    value: nasl.core.Boolean;
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    constructor(options?: Partial<VanRadioOptions<V>>);
  }
  export class VanRadioOptions<V> extends ViewComponentOptions {
    private title;
    /**
     * 选项值
     * 当前选中的值
     */
    name: nasl.core.String | nasl.core.Integer | nasl.core.Boolean;
    /**
     * 单选项图标
     */
    icon: nasl.core.String;
    /**
     * 文本位置
     * 设置文本居左或居右放置
     */
    labelPosition: 'right' | 'left';
    /**
     * 禁用
     * 正常显示，但禁止选择/输入
     */
    disabled: nasl.core.Boolean;
    /**
     * 点击后
     * 点击某一项后触发
     */
    onClick: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => void;
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanRate extends ViewComponent {
    /**
     * 值
     */
    value: VanRateOptions['value'];
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     */
    readonly: nasl.core.Boolean;
    constructor(options?: Partial<VanRateOptions>);
  }
  export class VanRateOptions extends ViewComponentOptions {
    /**
     * 值
     * 用于标识评分的值
     */
    value: nasl.core.Decimal;
    /**
     * 图标总数
     * 设置评分图标的总数
     */
    count: nasl.core.Integer;
    /**
     * 选中时的图标
     */
    icon: nasl.core.String;
    /**
     * 未选中时的图标
     */
    voidIcon: nasl.core.String;
    /**
     * 半选
     * 是否支持半选
     */
    allowHalf: nasl.core.Boolean;
    /**
     * 只读
     * 正常显示，但禁止选择/输入
     */
    readonly: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 图标大小
     * 设置图标大小，单位为px。
     */
    size: nasl.core.Decimal;
    /**
     * 图标间距
     * 设置图标间距，最小值为0。
     */
    gutter: nasl.core.Decimal;
    /**
     * 选中颜色
     */
    color: nasl.core.String;
    /**
     * 未选中颜色
     */
    voidColor: nasl.core.String;
    /**
     * 禁用颜色
     */
    disabledColor: nasl.core.String;
    /**
     * 分值变化时
     * 分值变化时
     */
    onChange: (event: nasl.core.Decimal) => void;
  }
}
declare namespace nasl.ui {
  export class VanRouterView extends ViewComponent {
    constructor(options?: Partial<VanRouterViewOptions>);
  }
  export class VanRouterViewOptions extends ViewComponentOptions {}
}
declare namespace nasl.ui {
  export class VanRow extends ViewComponent {
    constructor(options?: Partial<VanRowOptions>);
  }
  export class VanRowOptions extends ViewComponentOptions {
    /**
     * 布局模式
     * 设置布局模式
     */
    type: '-' | 'flex';
    /**
     * 横轴对齐
     */
    justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
    /**
     * 纵轴对齐
     */
    alignment: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
    /**
     * 列间距
     * 列元素之间的间距，单位为 px。
     */
    gutter: '0' | '10' | '20' | '30';
    /**
     * 插入`<van-col>`子组件。
     */
    slotDefault: () => Array<ViewComponent>;
  }
  export class VanCol extends ViewComponent {
    constructor(options?: Partial<VanColOptions>);
  }
  export class VanColOptions extends ViewComponentOptions {
    /**
     * 主轴方向
     */
    direction: 'horizontal' | 'vertical';
    _justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
    /**
     * 纵轴对齐
     */
    alignment: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
    _alignment: 'start' | 'center' | 'end' | 'stretch';
    /**
     * 横轴对齐
     */
    justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
    /**
     * 是否换行
     * 弹性布局下子元素总宽度超出父级时子元素是否换行展示
     */
    wrap: nasl.core.Boolean;
    /**
     * 内容间隙
     * 内容块间隙大小
     */
    gap: 'shrink' | 'none' | 'small' | 'normal' | 'large';
    /**
     * 占据列数
     * 栅格列宽度，栅格行最大为24列。
     */
    span: nasl.core.Integer;
    /**
     * 偏移数
     * 栅格列向右偏移列数
     */
    offset: nasl.core.Integer;
    /**
     * 布局模式
     * 设置布局模式
     */
    mode: 'inline' | 'flex';
    /**
     * 插入需要布局的元素。
     */
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanSearch extends ViewComponent {
    /**
     * 值
     */
    value: VanSearchOptions['value'];
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     */
    readonly: nasl.core.Boolean;
    constructor(options?: Partial<VanSearchOptions>);
  }
  export class VanSearchOptions extends ViewComponentOptions {
    private actiontext;
    /**
     * 值
     * 用于标识搜索框的值
     */
    value: nasl.core.String;
    /**
     * 最大字符数
     * 输入框内输入的最大字符数
     */
    maxlength: nasl.core.Integer;
    /**
     * 占位符
     * 搜索框为空的显示文字
     */
    placeholder: nasl.core.String;
    /**
     * 显示清除图标
     */
    cleartrigger: 'always' | 'focus';
    /**
     * 对齐方式
     * 设置对齐方式
     */
    inputAlign: 'left' | 'center' | 'right';
    /**
     * 搜索图标位置
     * 设置搜索图标位置
     */
    iconalign: 'left' | 'right';
    /**
     * 可清除
     * 是否启用清除图标，点击清除图标后会清空输入框
     */
    clearable: nasl.core.Boolean;
    /**
     * 只读
     * 正常显示，但禁止选择/输入
     */
    readonly: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 形状
     * 选择搜索框为方形或圆形
     */
    shape: 'square' | 'round';
    /**
     * 确定搜索时触发
     * 确定搜索时触发
     */
    onSearch: (event: nasl.core.String) => void;
    /**
     * 点击搜索图标时触发
     * 点击搜索图标时触发
     */
    onIconsearch: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => void;
    /**
     * 输入框内容变化时触发
     * 输入框内容变化时触发
     */
    onInput: (event: nasl.core.String) => void;
    /**
     * 输入框获得焦点时触发
     * 输入框获得焦点时触发
     */
    onFocus: (event: nasl.ui.BaseEvent) => void;
    /**
     * 输入框失去焦点时触发
     * 输入框失去焦点时触发
     */
    onBlur: (event: nasl.ui.BaseEvent) => void;
    /**
     * 点击输入区域时触发
     * 点击输入区域时触发
     */
    onClickinput: (event: nasl.ui.BaseEvent) => void;
    /**
     * 点击清除图标时触发
     * 点击清除图标时触发
     */
    onClear: (event: nasl.ui.BaseEvent) => void;
    /**
     * 组件插槽
     * 内容
     */
    slotDefault: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 内容
     */
    slotAction: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanSidebar extends ViewComponent {
    /**
     * 值
     */
    value: VanSidebarOptions['value'];
    constructor(options?: Partial<VanSidebarOptions>);
  }
  export class VanSidebarOptions extends ViewComponentOptions {
    /**
     * 值
     * 用于标识菜单的值
     */
    value: nasl.core.String;
    /**
     * 开启路由模式
     * 是否开启路由模式
     */
    route: nasl.core.Boolean;
    /**
     * 切换导航时
     * 切换导航时
     */
    onChange: (event: nasl.ui.BaseEvent) => void;
    /**
     * 插入`<van-sidebar-item>`子组件。
     */
    slotDefault: () => Array<ViewComponent>;
  }
  export class VanSidebarItem extends ViewComponent {
    constructor(options?: Partial<VanSidebarItemOptions>);
  }
  export class VanSidebarItemOptions extends ViewComponentOptions {
    /**
     * 值
     * 用于标识菜单项的值
     */
    value: nasl.core.String;
    /**
     * 显示徽章
     * 是否显示徽章
     */
    showbaget: nasl.core.Boolean;
    /**
     * 徽章值
     */
    badge: nasl.core.Decimal;
    /**
     * 请输入徽章最大值
     */
    badgemax: nasl.core.Decimal;
    private title;
    /**
     * 链接类型
     */
    linkType: 'destination' | 'download';
    /**
     * 链接地址
     */
    hrefAndTo: nasl.core.String;
    /**
     * 打开方式
     * 父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则打开方式同当前窗口。
     */
    target: '_blank' | '_self' | '_parent' | '_top';
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 点击菜单项
     * 点击选项导致 value 变化时触发
     */
    onClick: (event: nasl.core.Integer) => void;
    /**
     * 组件插槽
     * 内容
     */
    slotTitle: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanSlider extends ViewComponent {
    /**
     * 值
     */
    value: VanSliderOptions['value'];
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    constructor(options?: Partial<VanSliderOptions>);
  }
  export class VanSliderOptions extends ViewComponentOptions {
    /**
     * 值
     * 用于标识滑块的值
     */
    value: nasl.core.Decimal | nasl.collection.List<nasl.core.Decimal>;
    /**
     * 最大值
     */
    max: nasl.core.Decimal;
    /**
     * 最小值
     */
    min: nasl.core.Decimal;
    /**
     * 双滑块模式
     * 是否开启双滑块模式
     */
    range: nasl.core.Boolean;
    /**
     * 自定义组件
     */
    custom: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 垂直展示
     * 是否垂直展示
     */
    vertical: nasl.core.Boolean;
    /**
     * 步长
     */
    step: nasl.core.Decimal;
    /**
     * 进度条高度
     * 设置进度条高度，单位为px
     */
    barHeight: nasl.core.Decimal;
    /**
     * 滑块按钮大小
     * 设置滑块按钮大小，单位为px
     */
    buttonSize: nasl.core.Decimal;
    /**
     * 进度条激活态颜色
     */
    activeColor: nasl.core.String;
    /**
     * 进度条非激活态颜色
     */
    inactiveColor: nasl.core.String;
    /**
     * 改变时
     * 进度变化时实时触发
     */
    onInput: (event: nasl.core.Decimal) => void;
    /**
     * 改变后
     * 进度变化且结束拖动后触发
     */
    onChange: (event: nasl.core.Decimal) => void;
    /**
     * 开始拖动时触发
     * 开始拖动时触发
     */
    onDragStart: (event: nasl.ui.BaseEvent) => void;
    /**
     * 结束拖动时触发
     * 结束拖动时触发
     */
    onDragEnd: (event: nasl.ui.BaseEvent) => void;
    slotButton: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanStepperNew extends ViewComponent {
    /**
     * 值
     */
    value: VanStepperNewOptions['value'];
    /**
     * 格式化值
     */
    formattedValue: nasl.core.String;
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     */
    disableInput: nasl.core.Boolean;
    /**
     * 预览
     */
    preview: nasl.core.Boolean;
    constructor(options?: Partial<VanStepperNewOptions>);
  }
  export class VanStepperNewOptions extends ViewComponentOptions {
    /**
     * 值
     * 用于标识数字输入的值
     */
    value: nasl.core.Decimal | nasl.core.Integer;
    /**
     * 最小值
     */
    min: nasl.core.Decimal;
    /**
     * 最大值
     */
    max: nasl.core.Decimal;
    /**
     * 精度
     * 固定显示的小数位数
     */
    decimalLength: nasl.core.Integer;
    /**
     * 小数位数
     * 控制数据展示时小数点后保留几位，仅影响展示，不影响数据实际存储的值。例如：小数位数为2，则数据展示时小数点后保留2位。
     */
    decimalPlacesValue: nasl.core.Integer;
    /**
     * 隐藏末尾0
     * 控制数据展示时最后一个是否展示0，仅影响展示，不影响数据实际存储的值。
     */
    decimalPlacesOmitZero: nasl.core.Boolean;
    /**
     * 千位符
     */
    thousandths: nasl.core.Boolean;
    /**
     * 百分号
     */
    percentSign: nasl.core.Boolean;
    /**
     * 单位显示位置
     * 输入框中显示的单位
     */
    unitType: 'prefix' | 'suffix';
    /**
     * 单位
     * 输入框中显示的单位
     */
    unitValue: nasl.core.String;
    /**
     * 高级格式化
     * 用来控制数字的展示格式
     */
    advancedFormatEnable: nasl.core.Boolean;
    /**
     * 高级格式化内容
     * 用来控制数字的展示格式
     */
    advancedFormatValue: nasl.core.String;
    /**
     * 占位符
     * 输入框为空的显示文字
     */
    placeholder: nasl.core.String;
    /**
     * 显示增加按钮
     */
    showPlus: nasl.core.Boolean;
    /**
     * 显示减少按钮
     */
    showMinus: nasl.core.Boolean;
    /**
     * 禁用增加按钮
     */
    disablePlus: nasl.core.Boolean;
    /**
     * 禁用减少按钮
     */
    disableMinus: nasl.core.Boolean;
    /**
     * 只读
     * 正常显示，但禁止选择/输入。
     */
    disableInput: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 风格
     */
    theme: 'fang' | 'round';
    /**
     * 步长
     * 表示点击按钮或按上下键所增加或减少的量
     */
    step: nasl.core.Decimal;
    /**
     * 对齐方式
     * 设置对齐方式
     */
    align: 'left' | 'center' | 'right';
    /**
     * 预览
     * 显示预览态
     */
    preview: nasl.core.Boolean;
    /**
     * 点击加减按钮
     * 点击加减按钮时触发
     */
    onClick: (event: nasl.ui.BaseEvent) => void;
    /**
     * 值改变
     * 值改变时触发
     */
    onChange: (event: nasl.core.Decimal | nasl.core.Integer) => void;
  }
}
declare namespace nasl.ui {
  export class VanSteps<T> extends ViewComponent {
    /**
     * 当前步骤
     */
    value: VanStepsOptions<T>['value'];
    /**
     * 数据
     */
    data: nasl.collection.List<T>;
    /**
     * 第一步
     */
    isFirst: nasl.core.Boolean;
    /**
     * 最后一步
     */
    isLast: nasl.core.Boolean;
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     */
    readonly: nasl.core.Boolean;
    /**
     * 上一步
     * 上一步
     */
    prev(): void;
    /**
     * 下一步
     * 下一步
     */
    next(): void;
    /**
     * 重载数据
     * 重新加载数据
     */
    reload(): void;
    constructor(options?: Partial<VanStepsOptions<T>>);
  }
  export class VanStepsOptions<T> extends ViewComponentOptions {
    /**
     * 数据源
     * 展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑。
     */
    dataSource: nasl.collection.List<T> | {
      total: nasl.core.Integer;
      list: nasl.collection.List<T>;
    };
    /**
     * 数据类型
     * 集合类型每一元素的数据类型
     */
    dataSchema: T;
    /**
     * 当前步骤
     * 指定当前步骤，从0开始记数。
     */
    value: nasl.core.Integer;
    /**
     * 步骤条方向
     * 设置步骤条方向
     */
    direction: 'horizontal' | 'vertical';
    /**
     * 只读
     * 正常显示，但禁止选择/输入
     */
    readonly: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 切换步骤时
     * 切换步骤时
     */
    onChangestep: (event: nasl.core.Integer) => void;
    /**
     * 组件插槽
     * 插入`<van-step>`子组件。
     */
    slotDefault: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义选项的结构和样式
     */
    slotItem: (current: Current<T>) => Array<ViewComponent>;
  }
  export class VanStep extends ViewComponent {
    /**
     * 状态
     */
    status: 'wait' | 'process' | 'finish' | 'error';
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     */
    readonly: nasl.core.Boolean;
    constructor(options?: Partial<VanStepOptions>);
  }
  export class VanStepOptions extends ViewComponentOptions {
    /**
     * 状态
     * 设置步骤条的状态，分别为等待中、进行中、已完成、错误。
     */
    status: 'wait' | 'process' | 'finish' | 'error';
    /**
     * 图标
     * 自定义步骤的图标
     */
    icon: nasl.core.String;
    /**
     * 只读
     * 正常显示，但禁止选择/输入
     */
    readonly: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 点击标题
     * 点击标题
     */
    onClicktitle: (event: nasl.core.Integer) => void;
    /**
     * 点击图标
     * 点击图标
     */
    onClickicon: (event: nasl.core.Integer) => void;
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanSwipe<T> extends ViewComponent {
    /**
     * 数据
     */
    data: nasl.collection.List<T>;
    constructor(options?: Partial<VanSwipeOptions<T>>);
  }
  export class VanSwipeOptions<T> extends ViewComponentOptions {
    /**
     * 数据源
     * 展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑。
     */
    dataSource: nasl.collection.List<T> | {
      total: nasl.core.Integer;
      list: nasl.collection.List<T>;
    };
    /**
     * 数据类型
     * 集合类型每一元素的数据类型
     */
    dataSchema: T;
    private loop;
    private showIndicators;
    /**
     * 动画时间
     * 单位：毫秒，幻灯片切换时间，如果设置值小于动画时长，会在动画完成后切换。
     */
    duration: nasl.core.Decimal;
    /**
     * 手势滑动
     * 是否支持手势滑动
     */
    touchable: nasl.core.Boolean;
    /**
     * 组件插槽
     * 插入`van-swipe-item`子组件。
     */
    slotDefault: () => Array<VanSwipeItem>;
    /**
     * 组件插槽
     * 自定义选项的结构和样式
     */
    slotItem: (current: Current<T>) => Array<ViewComponent>;
  }
  export class VanSwipeItem extends ViewComponent {
    constructor(options?: Partial<VanSwipeItemOptions>);
  }
  export class VanSwipeItemOptions extends ViewComponentOptions {
    /**
     * 点击后
     * 点击某一项后触发
     */
    onClick: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => void;
    /**
     * 组件插槽
     * 插入幻灯片内容，如图片
     */
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanSwipeCell extends ViewComponent {
    constructor(options?: Partial<VanSwipeCellOptions>);
    /**
     * 禁止滑动
     */
    disabled: nasl.core.Boolean;
    /**
     * 收起单元格侧边栏
     * 收起单元格侧边栏
     */
    close(): any;
  }
  export class VanSwipeCellOptions extends ViewComponentOptions {
    /**
     * 左侧滑动区域宽度
     */
    leftWidth: nasl.core.String;
    /**
     * 右侧滑动区域宽度
     */
    rightWidth: nasl.core.String;
    /**
     * 禁止滑动
     */
    disabled: nasl.core.Boolean;
    /**
     * 点击
     * 点击后触发
     */
    onClick: (event: nasl.core.String) => void;
    /**
     * 组件插槽
     * 插入文本或 HTML。
     */
    slotDefault: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 右侧。
     */
    slotRight: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 左侧。
     */
    slotLeft: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanSwitch extends ViewComponent {
    /**
     * 值
     */
    value: nasl.core.Boolean;
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     */
    readonly: nasl.core.Boolean;
    constructor(options?: Partial<VanSwitchOptions>);
  }
  export class VanSwitchOptions extends ViewComponentOptions {
    /**
     * 值
     * 用于标识开关的值
     */
    value: nasl.core.Boolean;
    /**
     * 禁用
     * 正常显示，但禁止选择/输入
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    readonly: nasl.core.Boolean;
    /**
     * 显示开关文字
     * 是否显示开关文字
     */
    showText: nasl.core.Boolean;
    /**
     * 开启时文字
     * 开启时显示的文字
     */
    activeText: nasl.core.String;
    /**
     * 关闭时文字
     * 关闭时显示的文字
     */
    inactiveText: nasl.core.String;
    /**
     * 点击
     * 点击时触发
     */
    onClick: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => void;
    /**
     * 状态切换
     * 开关状态切换时触发
     */
    onChange: (event: nasl.core.Boolean) => void;
  }
}
declare namespace nasl.ui {
  export class VanTabbar extends ViewComponent {
    /**
     * 值
     */
    value: VanTabbarOptions['value'];
    constructor(options?: Partial<VanTabbarOptions>);
  }
  export class VanTabbarOptions extends ViewComponentOptions {
    /**
     * 值
     * 用于标识标签栏的值
     */
    value: nasl.core.String | nasl.core.Integer;
    /**
     * 固定底部
     */
    fixed: nasl.core.Boolean;
    /**
     * 开启路由模式
     * 是否开启路由模式
     */
    route: nasl.core.Boolean;
    /**
     * 显示外边框
     */
    border: nasl.core.Boolean;
    /**
     * 切换后
     * 切换标签时触发
     */
    onChange: (event: nasl.core.String) => void;
    /**
     * 插入`<van-tabbar-item>`子组件。
     */
    slotDefault: () => Array<VanTabbarItem>;
  }
  export class VanTabbarItem extends ViewComponent {
    /**
     * 徽章值
     */
    badge: VanTabbarItemOptions['badge'];
    constructor(options?: Partial<VanTabbarItemOptions>);
  }
  export class VanTabbarItemOptions extends ViewComponentOptions {
    /**
     * 标签项值
     * 用于标识标签项的值
     */
    name: nasl.core.String | nasl.core.Integer;
    /**
     * 显示徽章
     * 是否显示徽章
     */
    showbaget: nasl.core.Boolean;
    /**
     * 徽章值
     */
    badge: nasl.core.Decimal;
    /**
     * 徽章最大值
     */
    badgemax: nasl.core.Decimal;
    /**
     * 图标
     * 标签项的图标
     */
    icon: nasl.core.String;
    /**
     * 链接类型
     */
    linkType: 'destination' | 'download';
    /**
     * 链接地址
     */
    hrefAndTo: nasl.core.String;
    /**
     * 打开方式
     * 父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则打开方式同当前窗口。
     */
    target: '_blank' | '_self' | '_parent' | '_top';
    /**
     * 点击标签项
     * 点击选项导致 value 变化时触发
     */
    onClick: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => void;
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanTabs extends ViewComponent {
    /**
     * 值
     */
    value: VanTabsOptions['value'];
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    constructor(options?: Partial<VanTabsOptions>);
  }
  export class VanTabsOptions extends ViewComponentOptions {
    /**
     * 值
     * 用于标识选项卡的值
     */
    value: nasl.core.String | nasl.core.Integer;
    /**
     * 样式类型
     * 设置选项卡为线条类型或胶囊类型
     */
    type: 'line' | 'card';
    /**
     * 自动吸顶
     */
    sticky: nasl.core.Boolean;
    /**
     * 导航模式
     * 设置选项卡的导航模式
     */
    scrollspystr: 'no' | 'scrollspy';
    /**
     * 滑动切换
     */
    swipeable: nasl.core.Boolean;
    /**
     * 开启转场动画
     */
    animated: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 点击标签
     * 点击标签时触发
     */
    onClick: (event: nasl.core.String) => void;
    /**
     * 标签改变
     * 当前激活的标签改变时触发
     */
    onChange: (event: nasl.core.String) => void;
    /**
     * 默认
     * 插入`<van-tab>`子组件。
     */
    slotDefault: () => Array<VanTab>;
  }
  export class VanTab extends ViewComponent {
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 徽章值
     */
    badge: VanTabOptions['badge'];
    constructor(options?: Partial<VanTabOptions>);
  }
  export class VanTabOptions extends ViewComponentOptions {
    private title;
    /**
     * 选项值
     * 用于标识选项的值
     */
    name: nasl.core.String | nasl.core.Integer;
    /**
     * 显示徽章
     */
    badgebtn: nasl.core.Boolean;
    /**
     * 徽章值
     */
    badge: nasl.core.Decimal;
    /**
     * 徽章最大值
     * 徽章内容为数字时显示的最大值
     */
    badgemax: nasl.core.Decimal;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 默认
     * 显示的内容
     */
    slotDefault: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 组件插槽
     */
    slotTitle: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanTag extends ViewComponent {
    constructor(options?: Partial<VanTagOptions>);
  }
  export class VanTagOptions extends ViewComponentOptions {
    /**
     * 样式类型
     * 设置主题颜色与样式类型
     */
    type: 'primary' | 'success' | 'danger' | 'warning';
    /**
     * 显示为标记样式
     */
    mark: nasl.core.Boolean;
    /**
     * 可关闭
     */
    closeable: nasl.core.Boolean;
    /**
     * 尺寸
     * 设置标签大小
     */
    size: 'large' | 'medium' | 'small';
    /**
     * 显示为圆角
     */
    round: nasl.core.Boolean;
    /**
     * 显示为空心
     */
    plain: nasl.core.Boolean;
    /**
     * 点击时
     * 点击时触发
     */
    onClick: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => void;
    /**
     * 关闭前
     * 点击标签删除图标前触发，使用event.preventDefault可以阻止删除事件触发
     */
    onBeforeClose: (event: nasl.ui.BaseEvent) => void;
    /**
     * 关闭时
     * 点击标签删除图标时触发
     */
    onClose: (event: nasl.ui.BaseEvent) => void;
    /**
     * 内容自定义
     */
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanText extends ViewComponent {
    constructor(options?: Partial<VanTextOptions>);
  }
  export class VanTextOptions extends ViewComponentOptions {
    /**
     * 文本
     * 默认文本显示内容
     */
    text: nasl.core.String;
    /**
     * 主题颜色
     * 设置文本主题颜色
     */
    color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'disabled';
    /**
     * 展示方式
     * 选择行内或块级展示
     */
    display: 'inline' | 'block';
    /**
     * 隐藏处理
     * 设置文本过长时的处理方式
     */
    overflow: 'normal' | 'ellipsis' | 'break' | 'nowrap';
    /**
     * 尺寸
     * 设置文本大小
     */
    size: 'small' | 'normal' | 'large' | 'huge';
    /**
     * 点击后
     * 点击此项时触发
     */
    onClick: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => void;
  }
}
declare namespace nasl.ui {
  export class VanToast extends ViewComponent {
    constructor(options?: Partial<VanToastOptions>);
    /**
     * 打开弹出消息
     */
    open(): any;
    /**
     * 关闭弹出消息
     */
    close(): any;
  }
  export class VanToastOptions extends ViewComponentOptions {
    private value;
    /**
     * 提示内容
     * 默认提示内容
     */
    message: nasl.core.String;
    /**
     * 消息类型
     * 提示的类型
     */
    type: 'success' | 'warning' | 'fail' | 'loading' | 'custom';
    /**
     * 自定义图标
     */
    customIcon: nasl.core.String;
    /**
     * 停留时间
     * 自动关闭的延时，单位毫秒。设为 0 时不自动关闭
     */
    duration: nasl.core.Integer;
    private position;
    /**
     * 打开弹出消息后
     * 打开弹出消息时触发
     */
    onOpen: (event: nasl.ui.BaseEvent) => void;
    /**
     * 关闭弹出消息后
     * 关闭弹出消息时触发
     */
    onClose: (event: nasl.ui.BaseEvent) => void;
  }
}
declare namespace nasl.ui {
  export class VanUploader extends ViewComponent {
    constructor(options?: Partial<VanUploaderOptions>);
    /**
     * 值
     */
    value: VanUploaderOptions['value'];
    /**
     * 上传地址
     */
    url: VanUploaderOptions['url'];
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 只读
     */
    readonly: nasl.core.Boolean;
    /**
     * 预览
     */
    preview: nasl.core.Boolean;
    /**
     * 主动调起文件选择，由于浏览器安全限制，只在触发操作的上下文中调用才有效
     */
    chooseFile(): any;
  }
  export class VanUploaderOptions extends ViewComponentOptions {
    private resultType;
    /**
     * 值
     * 用于标识文件上传的值
     */
    value: nasl.collection.List<{
      name: nasl.core.String;
      url: nasl.core.String;
      size: nasl.core.Integer;
    }> | nasl.core.String;
    /**
     * 存储方式
     */
    fileConnectionGroup: () => any;
    /**
     * 字段名
     * 当前上传的文件字段名
     */
    name: nasl.core.String;
    /**
     * 支持上传文件类型
     * 若要限制上传文件类型，请输入类型名称，格式为“.后缀名”，多个文件类型时使用英文逗号隔开。例如“.jpeg,.png,.gif”
     */
    accept: nasl.core.String;
    /**
     * 文件上传地址
     */
    url: nasl.core.String;
    /**
     * 请求 headers
     */
    headers: Object;
    /**
     * 附加数据
     */
    data: Object;
    /**
     * 设置cookie值
     * 通过设置 withCredentials 为 true 获得的第三方 cookies，将会依旧享受同源策略
     */
    withCredentials: nasl.core.Boolean;
    /**
     * URL 字段名
     * 请求返回的 URL 字段名
     */
    urlField: nasl.core.String;
    /**
     * 转换器
     * 将选中的值以选择的符号作为连接符，转为字符串格式；选择“json”则转为JSON字符串格式。
     */
    converter: 'json' | 'simple';
    private autoUpload;
    /**
     * 多文件上传
     * 是否支持多文件上传
     */
    multiple: nasl.core.Boolean;
    /**
     * 列表数量上限
     */
    maxCount: nasl.core.Integer;
    /**
     * 最大文件大小
     * 设置最大文件大小,单位为MB，默认为50MB
     */
    maxSize: nasl.core.Decimal;
    /**
     * 图片选择模式
     * 设置图片选择模式
     */
    capture: 'waga' | 'camera';
    /**
     * 文件访问策略
     */
    access: 'public' | 'private';
    /**
     * 文件有效期
     * 是否开启文件有效期控制
     */
    ttl: nasl.core.Boolean;
    /**
     * 文件有效期天数
     */
    ttlValue: nasl.core.Decimal;
    /**
     * 源地址访问
     * 开启后支持通过文件存储源地址访问文件
     */
    viaOriginURL: nasl.core.Boolean;
    /**
     * 启用压缩
     * 启用压缩后上传的文件按压缩规则进行压缩后上传，压缩规则可在自定义配置参数管理
     */
    lcapIsCompress: nasl.core.Boolean;
    /**
     * 只读
     * 正常显示，但禁止选择/输入
     */
    readonly: nasl.core.Boolean;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 预览
     * 显示预览态
     */
    preview: nasl.core.Boolean;
    /**
     * 点击
     * 点击上传区域时触发
     */
    onClickUpload: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => void;
    /**
     * 文件大小超额
     * 文件大小超额时触发
     */
    onOversize: (event: {
      file: {
        name: nasl.core.String;
        size: nasl.core.Integer;
        type: nasl.core.String;
      };
      message: nasl.core.String;
      name: nasl.core.String;
      size: nasl.core.Integer;
      status: nasl.core.String;
      uid: nasl.core.Integer;
    }) => void;
    /**
     * 删除预览
     * 删除文件预览时触发
     */
    onDelete: (event: {
      massage: nasl.core.String;
      name: nasl.core.String;
      size: nasl.core.Integer;
      uid: nasl.core.Integer;
      url: nasl.core.String;
      index: nasl.core.Integer;
    }) => void;
    /**
     * 上传开始时
     * 上传开始时触发
     */
    onStart: (event: {
      file: {
        name: nasl.core.String;
        size: nasl.core.Integer;
        type: nasl.core.String;
      };
      item: {
        message: nasl.core.String;
        name: nasl.core.String;
        percent: nasl.core.Integer;
        size: nasl.core.Integer;
        status: nasl.core.String;
        uid: nasl.core.Integer;
        url: nasl.core.String;
      };
    }) => void;
    /**
     * 上传中
     * 上传中进度
     */
    onProgress: (event: {
      file: {
        name: nasl.core.String;
        size: nasl.core.Integer;
        type: nasl.core.String;
      };
      item: {
        message: nasl.core.String;
        name: nasl.core.String;
        percent: nasl.core.Integer;
        size: nasl.core.Integer;
        status: nasl.core.String;
        uid: nasl.core.Integer;
        url: nasl.core.String;
        response: {
          filePath: nasl.core.String;
          msg: nasl.core.String;
          result: nasl.core.String;
          success: nasl.core.Boolean;
        };
      };
    }) => void;
    /**
     * 上传成功时
     * 上传成功时触发
     */
    onSuccess: (event: {
      file: {
        name: nasl.core.String;
        size: nasl.core.Integer;
        type: nasl.core.String;
      };
      item: {
        message: nasl.core.String;
        name: nasl.core.String;
        percent: nasl.core.Integer;
        size: nasl.core.Integer;
        status: nasl.core.String;
        uid: nasl.core.Integer;
        url: nasl.core.String;
        response: {
          filePath: nasl.core.String;
          msg: nasl.core.String;
          result: nasl.core.String;
          success: nasl.core.Boolean;
        };
      };
    }) => void;
    /**
     * 上传错误时
     * 上传报错时触发
     */
    onError: (event: {
      file: {
        name: nasl.core.String;
        size: nasl.core.Integer;
        type: nasl.core.String;
      };
      item: {
        message: nasl.core.String;
        name: nasl.core.String;
        percent: nasl.core.Integer;
        size: nasl.core.Integer;
        status: nasl.core.String;
        uid: nasl.core.Integer;
        url: nasl.core.String;
        response: {
          filePath: nasl.core.String;
          msg: nasl.core.String;
          result: nasl.core.String;
          success: nasl.core.Boolean;
        };
      };
    }) => void;
    /**
     * 配置文件上传图标
     */
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanAbsoluteLayout extends ViewComponent {
    constructor(options?: Partial<VanAbsoluteLayoutOptions>);
  }
  export class VanAbsoluteLayoutOptions extends ViewComponentOptions {
    /**
     * 点击后
     * 点击此项时触发
     */
    onClick: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => void;
    /**
     * 内容
     */
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanAnchor extends ViewComponent {
    constructor(options?: Partial<VanAnchorOptions>);
  }
  export class VanAnchorOptions extends ViewComponentOptions {
    /**
     * 标识
     * 锚点的唯一标识，用于跳转链接，如“/page#linkname”
     */
    label: nasl.core.String;
    /**
     * 默认
     * 内容
     */
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanCopy extends ViewComponent {
    /**
     * 复制的值
     */
    value: VanCopyOptions['value'];
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    constructor(options?: Partial<VanCopyOptions>);
  }
  export class VanCopyOptions extends ViewComponentOptions {
    private text;
    private successText;
    private feedback;
    private placement;
    private hideDelay;
    /**
     * 值
     * 用于标识的值
     */
    value: nasl.core.String;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 复制成功后
     * 内容复制成功后触发
     */
    onCopy: (event: {
      value: nasl.core.String;
    }) => void;
    /**
     * 修改默认触发元素
     */
    slotDefault: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanCountDownNew extends ViewComponent {
    /**
     * 开始计时器
     */
    start(): any;
    /**
     * 暂停计时器
     */
    pause(): any;
    /**
     * 继续计时器
     */
    continue(): any;
    /**
     * 停止计时器
     */
    stop(): any;
    constructor(options?: Partial<VanCountDownNewOptions>);
  }
  export class VanCountDownNewOptions extends ViewComponentOptions {
    /**
     * 计时器时长（秒）
     * 设置定时时间
     */
    timer: nasl.core.Integer;
    /**
     * 计时方式
     * 设置计时器计时方式
     */
    reverse: 'positive' | 'negative';
    /**
     * 自动开始计时
     * 是否开启自动开始计时
     */
    autostart: nasl.core.Boolean;
    /**
     * 隐藏分钟
     * 设置是否隐藏分钟
     */
    hideMinute: nasl.core.Boolean;
    /**
     * 计时器开始
     * 计时器开始时触发
     */
    onStart: (event: nasl.ui.BaseEvent) => void;
    /**
     * 计时器暂停
     * 计时器暂停时触发
     */
    onPause: (event: nasl.ui.BaseEvent) => void;
    /**
     * 计时器继续
     * 计时器继续时触发
     */
    onContinue: (event: nasl.ui.BaseEvent) => void;
    /**
     * 计时器结束
     * 计时器结束时触发
     */
    onStop: (event: nasl.ui.BaseEvent) => void;
  }
}
declare namespace nasl.ui {
  export class VanGridView<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean> extends ViewComponent {
    constructor(options?: Partial<VanGridViewOptions<T, V, P, M>>);
    /**
     * 数据
     */
    data: nasl.collection.List<T>;
    /**
     * 数据总数
     */
    total: nasl.core.Integer;
    /**
     * 当前页数
     */
    page: nasl.core.Integer;
    /**
     * 当前页数
     */
    size: nasl.core.Integer;
    /**
     * 过滤文本
     */
    filterText: nasl.core.String;
    /**
     * 排序属性
     */
    sort: nasl.core.String;
    /**
     * 排序方式
     */
    order: nasl.core.String;
    /**
     * 清除缓存，重新加载
     */
    reload(): any;
  }
  export class VanGridViewOptions<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean> extends ViewComponentOptions {
    private value;
    private valueField;
    private cancelable;
    private multiple;
    private clearable;
    /**
     * 数据源
     * 展示数据的输入源，可设置为数据集对象或者返回数据集的逻辑。
     */
    dataSource: nasl.collection.List<T> | {
      total: nasl.core.Integer;
      list: nasl.collection.List<T>;
    };
    /**
     * 数据类型
     * 数据源返回的数据结构的类型，自动识别类型进行展示说明。
     */
    dataSchema: T;
    /**
     * 分页方式
     * 设置分页方式
     */
    pageable: '' | 'auto-more' | 'load-more';
    /**
     * 分页大小
     * 设置分页大小，单位为px。
     */
    pageSize: nasl.core.Integer;
    private pageNumber;
    /**
     * 可筛选
     * 是否可以过滤（搜索），开启将会显示搜索框。
     */
    filterable: nasl.core.Boolean;
    private remotePaging;
    private remoteFiltering;
    /**
     * 下拉刷新
     * 是否开启下拉刷新
     */
    pullRefresh: nasl.core.Boolean;
    /**
     * 下拉过程中提示文案
     */
    pullingText: nasl.core.String;
    /**
     * 释放过程中提示文案
     */
    loosingText: nasl.core.String;
    /**
     * 刷新成功提示文案
     */
    successText: nasl.core.String;
    /**
     * 展示时长
     * 设置刷新成功后提示展示时长，单位为ms。
     */
    successDuration: nasl.core.Integer;
    /**
     * 刷新距离
     * 设置触发下拉刷新的距离，单位为px。
     */
    pullDistance: nasl.core.Decimal;
    /**
     * 搜索框占位符
     * 搜索框为空时的显示文本
     */
    placeholder: nasl.core.String;
    /**
     * 初始加载
     * 设置初始时是否立即加载
     */
    initialLoad: nasl.core.Boolean;
    /**
     * 加载中文案
     */
    loadingText: nasl.core.String;
    private error;
    /**
     * 加载失败文案
     */
    errorText: nasl.core.String;
    /**
     * 暂无数据文案
     */
    emptyText: nasl.core.String;
    /**
     * 瀑布模式
     * 是否开启瀑布模式
     */
    iffall: nasl.core.Boolean;
    /**
     * 网格数
     * 设置每页排列几项
     */
    col: nasl.core.Integer;
    private readonly;
    private disabled;
    /**
     * 文本字段名
     * 选项文本的字段名，可用于前端筛选时的匹配
     */
    textField: (item: T) => any;
    /**
     * 加载后
     * 加载时触发
     */
    onLoad: (event: nasl.ui.BaseEvent) => void;
    /**
     * 组件插槽
     * 插入<van-cardu />
     */
    slotDefault: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义选项的结构和样式
     */
    slotItem: (current: Current<T>) => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanIframe extends ViewComponent {
    /**
     * 网页地址
     */
    src: VanIframeOptions['src'];
    /**
     * 加载完成
     */
    loaded: nasl.core.Boolean;
    constructor(options?: Partial<VanIframeOptions>);
  }
  export class VanIframeOptions extends ViewComponentOptions {
    /**
     * 地址
     * 需要嵌入的网页地址
     */
    src: nasl.core.String;
    /**
     * 加载完成
     * 网页加载完成时触发。
     */
    onLoad: (event: nasl.ui.BaseEvent) => void;
  }
}
declare namespace nasl.ui {
  export class VanLink extends ViewComponent {
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    constructor(options?: Partial<VanLinkOptions>);
  }
  export class VanLinkOptions extends ViewComponentOptions {
    private to;
    private replace;
    private append;
    private decoration;
    /**
     * 文本
     * 默认文本显示内容
     */
    text: nasl.core.String;
    /**
     * 主题颜色
     * 设置链接主题颜色
     */
    color: 'default' | 'light' | 'success' | 'warning' | 'danger';
    /**
     * 展示方式
     * 选择行内或块级展示
     */
    display: 'inline' | 'block';
    /**
     * 链接类型
     */
    linkType: 'destination' | 'download';
    /**
     * 链接地址
     */
    hrefAndTo: nasl.core.String;
    /**
     * 打开方式
     * 父级窗口和顶级窗口仅适用于iframe组件嵌套的情况，若不存在嵌套，则打开方式同当前窗口。
     */
    target: '_blank' | '_self' | '_parent' | '_top';
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 点击后
     * 点击某一项后触发
     */
    onClick: (event: {
      altKey: nasl.core.Boolean;
      button: nasl.core.Integer;
      clientX: nasl.core.Integer;
      clientY: nasl.core.Integer;
      ctrlKey: nasl.core.Boolean;
      metaKey: nasl.core.Boolean;
      movementX: nasl.core.Integer;
      movementY: nasl.core.Integer;
      offsetX: nasl.core.Integer;
      offsetY: nasl.core.Integer;
      pageX: nasl.core.Integer;
      pageY: nasl.core.Integer;
      screenX: nasl.core.Integer;
      screenY: nasl.core.Integer;
      which: nasl.core.Integer;
    }) => void;
  }
}
declare namespace nasl.ui {
  export class VanListView<T, V, P, M> extends ViewComponent {
    constructor(options?: Partial<VanListViewOptions<T, V, P, M>>);
    /**
     * 数据
     */
    data: nasl.collection.List<T>;
    /**
     * 数据总数
     */
    total: nasl.core.Integer;
    /**
     * 当前页数
     */
    page: nasl.core.Integer;
    /**
     * 当前页数
     */
    size: nasl.core.Integer;
    /**
     * 过滤文本
     */
    filterText: nasl.core.String;
    /**
     * 值
     */
    value: VanListViewOptions<T, V, P, M>['value'];
    /**
     * 清除缓存，重新加载
     */
    reload(): any;
    /**
     * 带页码刷新
     * 保持页码，重新加载
     * @param page - '要刷新的页数'
     */
    loadTo(page?: nasl.core.Integer): void;
  }
  export class VanListViewOptions<T, V, P, M> extends ViewComponentOptions {
    private readonly;
    private disabled;
    private cancelable;
    private showHead;
    private title;
    private showFoot;
    private remotePaging;
    private remoteFiltering;
    private matchMethod;
    private caseSensitive;
    private size;
    /**
     * 数据源
     * 列表的数据源。数组方式表示直接的数据，函数需要返回一个 Promise。
     */
    dataSource: nasl.collection.List<T> | {
      total: nasl.core.Integer;
      list: nasl.collection.List<T>;
    };
    /**
     * 数据类型
     * 数据源返回的数据结构的类型，自动识别类型进行展示说明。
     */
    dataSchema: T;
    /**
     * 值字段名
     * 选项值的字段名
     */
    valueField: (item: T) => V;
    /**
     * 文本字段名
     * 选项文本的字段名，可用于前端筛选时的匹配
     */
    textField: (item: T) => any;
    /**
     * 值
     * 用于标识数据列表的值
     */
    value: M extends true ? nasl.collection.List<V> : V;
    /**
     * 分页
     * 设置分页类型
     */
    pageable: '' | 'auto-more' | 'load-more' | 'pagination';
    /**
     * 默认分页大小
     * 分页过小可能会导致滚动加载更多失效
     */
    pageSize: nasl.core.Integer;
    private pageNumber;
    /**
     * 可筛选
     * 是否可以过滤（搜索），开启将会显示搜索框。
     */
    filterable: nasl.core.Boolean;
    /**
     * 筛选输入框显示文字
     */
    placeholder: nasl.core.String;
    /**
     * 筛选清除按钮
     * 搜索框是否展示清除按钮
     */
    clearable: nasl.core.Boolean;
    private selectable;
    /**
     * 多选
     * 设置是否可以多选行，不开启则为单选。
     */
    multiple: nasl.core.Boolean;
    /**
     * 已选图标
     */
    selectedIcon: nasl.core.String;
    /**
     * 未选图标
     */
    unselectedIcon: nasl.core.String;
    /**
     * 下拉刷新
     * 是否开启下拉刷新
     */
    pullRefresh: nasl.core.Boolean;
    /**
     * 下拉过程中提示文案
     */
    pullingText: nasl.core.String;
    /**
     * 释放过程中提示文案
     */
    loosingText: nasl.core.String;
    /**
     * 刷新成功提示文案
     */
    successText: nasl.core.String;
    /**
     * 展示时长
     * 设置刷新成功后提示展示时长，单位为ms。
     */
    successDuration: nasl.core.Integer;
    /**
     * 刷新距离
     * 设置触发下拉刷新的距离，单位为px。
     */
    pullDistance: nasl.core.Decimal;
    /**
     * 隐藏空态文案
     * 是否隐藏表格末尾“没有更多了”文案
     */
    hiddenempty: nasl.core.Boolean;
    /**
     * 初始加载
     * 是否在初始时立即加载
     */
    initialLoad: nasl.core.Boolean;
    /**
     * 加载状态
     * 设置加载状态
     */
    designerMode: 'success' | 'empty' | 'loading' | 'error';
    /**
     * 加载中文案
     * 加载中状态显示的文案
     */
    loadingText: nasl.core.String;
    /**
     * 加载中触发条件
     * 加载中状态的触发条件，未设置则默认为系统定义条件。
     */
    loading: nasl.core.Boolean;
    /**
     * 加载失败文案
     * 加载失败状态显示的提示文案
     */
    errorText: nasl.core.String;
    /**
     * 加载失败触发条件
     * 加载失败状态的触发条件，未设置则默认为系统定义条件。
     */
    error: nasl.core.Boolean;
    /**
     * 暂无数据文案
     * 暂无数据状态显示的提示文案
     */
    emptyText: nasl.core.String;
    /**
     * 斑马条纹
     * 是否按斑马线条纹显示
     */
    striped: nasl.core.Boolean;
    /**
     * 滚动容器
     * 可触发滚动加载更多的容器。默认为自身；父级则会就近向上查找可滚动的容器。
     */
    scrollTarget: 'self' | 'parent';
    /**
     * 选择时
     * 选择某一项时触发
     */
    onInput: (event: M extends true ? nasl.collection.List<V> : V) => void;
    /**
     * 选择后
     * 选择某一项时触发
     */
    onSelect: (event: {
      selected: nasl.core.Boolean;
      item: T;
      value: M extends true ? nasl.collection.List<V> : V;
    }) => void;
    /**
     * 改变后
     * 选择值改变时触发。
     */
    onChange: (event: {
      item: T;
      value: M extends true ? nasl.collection.List<V> : V;
    }) => void;
    /**
     * 加载前
     * 加载前触发
     */
    onBeforeLoad: (event: nasl.ui.BaseEvent) => void;
    /**
     * 加载后
     * 加载时触发
     */
    onLoad: (event: nasl.ui.BaseEvent) => void;
    /**
     * 组件插槽
     * 插入<van-cell />
     */
    slotDefault: () => Array<ViewComponent>;
    /**
     * 空状态时显示的内容
     */
    slotEmpty: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义选项的结构和样式
     */
    slotItem: (current: Current<T>) => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义上一页
     */
    slotPrev: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 自定义下一页
     */
    slotNext: () => Array<ViewComponent>;
  }
}
declare namespace nasl.ui {
  export class VanPopupCombination extends ViewComponent {
    constructor(options?: Partial<VanPopupCombinationOptions>);
    /**
     * 打开
     */
    opened: nasl.core.Boolean;
    /**
     * 禁用
     */
    disabled: nasl.core.Boolean;
    /**
     * 弹出实例。
     */
    open(): any;
    /**
     * 关闭实例。
     */
    close(): any;
    /**
     * 切换弹出/关闭状态。
     * @param opened - '可选。弹出/关闭状态'
     */
    toggle(opened?: nasl.core.Boolean): any;
    /**
     * 更新 popper 实例。参考 [Popper.update()](https://popper.js.org/popper-documentation.html#Popper.update)。
     */
    update(): any;
    /**
     * 在下次 UI 渲染时一块更新 popper 实例，比`update()`性能要好。参考 [Popper.scheduleUpdate()](https://popper.js.org/popper-documentation.html#Popper.scheduleUpdate)。
     */
    scheduleUpdate(): any;
  }
  export class VanPopupCombinationOptions extends ViewComponentOptions {
    private trigger;
    private offset;
    private followCursor;
    private mergeBorders;
    /**
     * 标题
     */
    title: nasl.core.String;
    /**
     * 弹出状态
     * 弹出状态分为“True(弹出)/False(关闭)”，默认为“弹出”
     */
    opened: nasl.core.Boolean;
    /**
     * 弹出位置
     * 设置弹出位置
     */
    placement: 'top' | 'bottom' | 'left' | 'right';
    /**
     * 消失延迟时间
     * 当触发方式为“悬浮”时，提示内容消失延迟时间，单位为ms。
     */
    hideDelay: nasl.core.Integer;
    /**
     * 展示方式
     * 设置展示方式
     */
    display: 'inline' | 'block';
    private ellipsis;
    /**
     * 禁用
     * 置灰显示，且禁止任何交互（焦点、点击、选择、输入等）
     */
    disabled: nasl.core.Boolean;
    /**
     * 弹出前
     * 弹出前触发。
     */
    onBeforeOpen: (event: nasl.ui.BaseEvent) => void;
    /**
     * 弹出时
     * 弹出时触发。
     */
    onOpen: (event: nasl.ui.BaseEvent) => void;
    /**
     * 隐藏前
     * 隐藏前触发。
     */
    onBeforeClose: (event: nasl.ui.BaseEvent) => void;
    /**
     * 隐藏后
     * 隐藏时触发。
     */
    onClose: (event: nasl.ui.BaseEvent) => void;
    /**
     * 组件插槽
     * 自定义弹出的内容。
     */
    slotDefault: () => Array<ViewComponent>;
    /**
     * 组件插槽
     * 弹出层触发节点。
     */
    slotReference: () => Array<ViewComponent>;
  }
}