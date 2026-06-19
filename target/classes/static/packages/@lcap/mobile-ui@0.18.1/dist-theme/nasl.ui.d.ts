/// <reference types="@nasl/types" />
declare namespace nasl.ui {
    class VanArea extends ViewComponent {
        constructor(options?: Partial<VanAreaOptions>);
    }
    class VanAreaOptions extends ViewComponentOptions {
        private labelField;
        isNew: nasl.core.Boolean;
        value: nasl.core.String;
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
        title: nasl.core.String;
        confirmButtonText: nasl.core.String;
        cancelButtonText: nasl.core.String;
        visibleItemCount: nasl.core.Integer;
        columnsNum: nasl.core.Integer;
        inputAlign: 'left' | 'center' | 'right';
        converter: 'name' | 'code';
        closeOnClickOverlay: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onConfirm: (values: nasl.collection.List<{
            code: nasl.core.String;
            name: nasl.core.String;
        }>, index: nasl.collection.List<nasl.core.Integer>, value: nasl.core.String) => any;
        onCancel: (event: any) => any;
        onChange: (event: any) => any;
        slotTitle: () => Array<ViewComponent>;
        slotPannelTitle: () => Array<ViewComponent>;
        slotPickerTop: () => Array<VanPickerActionSlot>;
        slotPickerBottom: () => Array<VanPickerActionSlot>;
    }
}
declare namespace nasl.ui {
    class VanBadge extends ViewComponent {
        constructor(options?: Partial<VanBadgeOptions>);
    }
    class VanBadgeOptions extends ViewComponentOptions {
        content: nasl.core.Decimal;
        max: nasl.core.Decimal;
        dot: nasl.core.Boolean;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanButton extends ViewComponent {
        constructor(options?: Partial<VanButtonOptions>);
    }
    class VanButtonOptions extends ViewComponentOptions {
        private to;
        replace: nasl.core.Boolean;
        text: nasl.core.String;
        type: 'info' | 'info_secondary' | 'default' | 'warning' | 'warning_secondary' | 'danger' | 'danger_secondary';
        block: 'spanb' | 'blockb';
        icon: nasl.core.String;
        iconPosition: 'left' | 'right';
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
        disabled: nasl.core.Boolean;
        loading: nasl.core.Boolean;
        loadingText: nasl.core.String;
        size: 'large' | 'middle' | 'normal' | 'small' | 'mini';
        squareroud: 'square' | 'round';
        hairline: nasl.core.Boolean;
        onClick: (event: any) => any;
    }
}
declare namespace nasl.ui {
    class VanCalendar extends ViewComponent {
        constructor(options?: Partial<VanCalendarOptions>);
        reset(): any;
    }
    class VanCalendarOptions extends ViewComponentOptions {
        private labelField;
        private type;
        isNew: nasl.core.Boolean;
        value: nasl.core.String;
        minDate: nasl.core.String;
        maxDate: nasl.core.String;
        title: nasl.core.String;
        inputAlign: 'left' | 'center' | 'right';
        closeOnClickOverlay: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onConfirm: (event: nasl.core.Date) => any;
        onSelect: (event: nasl.core.Date) => any;
        onCancel: (event: any) => any;
        slotTitle: () => Array<ViewComponent>;
        slotPannelTitle: () => Array<ViewComponent>;
        slotPickerTop: () => Array<VanPickerActionSlot>;
        slotPickerBottom: () => Array<VanPickerActionSlot>;
    }
}
declare namespace nasl.ui {
    class VanCapsules extends ViewComponent {
        constructor(options?: Partial<VanCapsulesOptions>);
    }
    class VanCapsulesOptions extends ViewComponentOptions {
        value: nasl.core.Any;
        cancelable: nasl.core.Boolean;
        multiple: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onSelect: (event: {
            value: nasl.core.Any;
        }) => any;
        onChange: (event: {
            value: nasl.core.Any;
        }) => any;
        slotDefault: () => Array<VanCapsulesItem | VanCapsulesGroup>;
    }
    class VanCapsulesItem extends ViewComponent {
        constructor(options?: Partial<VanCapsulesItemOptions>);
    }
    class VanCapsulesItemOptions extends ViewComponentOptions {
        value: nasl.core.Any;
        label: nasl.core.String;
        flag: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        slotDefault: () => Array<ViewComponent>;
    }
    class VanCapsulesGroup extends ViewComponent {
        constructor(options?: Partial<VanCapsulesGroupOptions>);
    }
    class VanCapsulesGroupOptions extends ViewComponentOptions {
        slotDefault: () => Array<VanCapsulesItem>;
    }
}
declare namespace nasl.ui {
    class VanCardu extends ViewComponent {
        constructor(options?: Partial<VanCarduOptions>);
    }
    class VanCarduOptions extends ViewComponentOptions {
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
        private width;
        sr: 's' | 'r';
        shadow: nasl.core.Boolean;
        border: nasl.core.Boolean;
        split: nasl.core.Boolean;
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
        }) => any;
        slotDefault: () => Array<ViewComponent>;
        slotCover: () => Array<ViewComponent>;
        slotHead: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanCascader<T, V> extends ViewComponent {
        constructor(options?: Partial<VanCascaderOptions<T, V>>);
        value: VanCascaderOptions<T, V>['value'];
        filterText: nasl.core.String;
    }
    class VanCascaderOptions<T, V> extends ViewComponentOptions {
        private labelField;
        treeDisplay: nasl.core.Boolean;
        value: V;
        dataSource: nasl.collection.List<T> | {
            total: nasl.core.Integer;
            list: nasl.collection.List<T>;
        };
        dataSchema: T;
        textField: (item: T) => any;
        valueField: (item: T) => V;
        parentField: (item: T) => any;
        childrenField: (item: T) => any;
        placeholder: nasl.core.String;
        title: nasl.core.String;
        tabPlaceholder: nasl.core.String;
        inputAlign: 'left' | 'center' | 'right';
        filterable: nasl.core.Boolean;
        closeOnClickOverlay: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onFinish: (event: {
            value: V;
        }) => any;
        onChange: (event: {
            value: V;
        }) => any;
        slotOption: (current: Current<T>) => Array<ViewComponent>;
        slotTitle: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanCellGroup extends ViewComponent {
        constructor(options?: Partial<VanCellGroupOptions>);
    }
    class VanCellGroupOptions extends ViewComponentOptions {
        inset: nasl.core.Boolean;
        slotDefault: () => Array<VanCell>;
    }
    class VanCell extends ViewComponent {
        constructor(options?: Partial<VanCellOptions>);
    }
    class VanCellOptions extends ViewComponentOptions {
        private title;
        private rtitle;
        private label;
        value: nasl.core.String;
        isLink: nasl.core.Boolean;
        arrowDirection: 'left' | 'up' | 'down' | 'right';
        center: nasl.core.Boolean;
        icon: nasl.core.String;
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
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
        }) => any;
        slotDefault: () => Array<ViewComponent>;
        slotTitle: () => Array<ViewComponent>;
        private slotRightIcon;
    }
}
declare namespace nasl.ui {
    class VanCheckboxGroup<T, V> extends ViewComponent {
        constructor(options?: Partial<VanCheckboxGroupOptions<T, V>>);
        value: VanCheckboxGroupOptions<T, V>['value'];
        data: VanCheckboxGroupOptions<T, V>['dataSource'];
    }
    class VanCheckboxGroupOptions<T, V> extends ViewComponentOptions {
        dataSource: nasl.collection.List<T> | {
            total: nasl.core.Integer;
            list: nasl.collection.List<T>;
        };
        dataSchema: T;
        value: nasl.collection.List<V>;
        max: nasl.core.Integer;
        min: nasl.core.Integer;
        valueField: (item: T) => V;
        direction: 'horizontal' | 'vertical';
        column: nasl.core.Integer;
        converter: 'join' | 'join:|' | 'join:;' | 'json' | 'none';
        disabled: nasl.core.Boolean;
        onChange: (event: {
            value: nasl.collection.List<V>;
        }) => any;
        slotDefault: () => Array<VanCheckbox<V>>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
    class VanCheckbox<V> extends ViewComponent {
        constructor(options?: Partial<VanCheckboxOptions<V>>);
    }
    class VanCheckboxOptions<V> extends ViewComponentOptions {
        private title;
        label: V;
        shape: 'square' | 'round';
        labelPosition: 'right' | 'left';
        value: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
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
        }) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanCircle extends ViewComponent {
        constructor(options?: Partial<VanCircleOptions>);
    }
    class VanCircleOptions extends ViewComponentOptions {
        private text;
        value: nasl.core.Decimal;
        clockwise: nasl.core.Boolean;
        size: nasl.core.Decimal;
        color: nasl.core.String;
        layerColor: nasl.core.String;
        fill: nasl.core.String;
        strokeWidth: nasl.core.Decimal;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanCollapse extends ViewComponent {
        constructor(options?: Partial<VanCollapseOptions>);
    }
    class VanCollapseOptions extends ViewComponentOptions {
        value: nasl.core.String;
        accordion: nasl.core.Boolean;
        onChange: (event: nasl.core.String) => any;
        slotDefault: () => Array<VanCollapseItem>;
    }
    class VanCollapseItem extends ViewComponent {
        toggle(expanded?: nasl.core.Boolean): any;
        constructor(options?: Partial<VanCollapseItemOptions>);
    }
    class VanCollapseItemOptions extends ViewComponentOptions {
        private title;
        name: nasl.core.String;
        isLink: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onOpen: (event: any) => any;
        onClose: (event: any) => any;
        slotTitle: () => Array<ViewComponent>;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanDatetimePicker extends ViewComponent {
        constructor(options?: Partial<VanDatetimePickerOptions>);
        open(): any;
        close(): any;
    }
    class VanDatetimePickerOptions extends ViewComponentOptions {
        private labelField;
        type: 'time' | 'date' | 'datetime';
        unit: 'date' | 'week' | 'month' | 'quarter' | 'year' | 'minute' | 'second';
        showFormatter: 'YYYY年M月D日' | 'YYYY-MM-DD' | 'M/D/YYYY' | 'D/M/YYYY' | 'GGGG-W周' | 'GGGG年第W周' | 'GGGG-WWWW' | 'YYYY年M月' | 'YYYY-MM' | 'M/YYYY' | 'YYYY年第Q季度' | 'YYYY年QQ' | 'YYYY-QQ' | 'YYYY年' | 'YYYY' | 'HH:mm:ss' | 'HH时mm分ss秒' | 'HH:mm' | 'HH时mm分' | 'YYYY-MM-DD HH:mm:ss' | 'YYYY年M月D日 HH时mm分ss秒' | 'YYYY-MM-DD HH:mm HH:mm' | 'YYYY年M月D日 HH时mm分';
        advancedFormat: {
            enable: nasl.core.Boolean;
            value: nasl.core.String;
        };
        range: nasl.core.Boolean;
        startValue: nasl.core.String;
        endValue: nasl.core.String;
        isNew: nasl.core.Boolean;
        value: nasl.core.String;
        minDate: nasl.core.String;
        maxDate: nasl.core.String;
        maxHour: nasl.core.Integer;
        minHour: nasl.core.Integer;
        maxMinute: nasl.core.Integer;
        minMinute: nasl.core.Integer;
        converter: 'format' | 'timestamp' | 'json' | 'date';
        private displayFormat;
        title: nasl.core.String;
        inputAlign: 'left' | 'center' | 'right';
        closeOnClickOverlay: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onConfirm: (event: nasl.core.String) => any;
        onCancel: (event: any) => any;
        slotTitle: () => Array<ViewComponent>;
        slotTop: () => Array<ViewComponent>;
        slotBottom: () => Array<ViewComponent>;
        slotPannelTitle: () => Array<ViewComponent>;
        slotPickerTop: () => Array<VanPickerActionSlot>;
        slotPickerBottom: () => Array<VanPickerActionSlot>;
    }
    class VanDatetimePickerActionSlot extends ViewComponent {
        constructor(options?: Partial<VanDatetimePickerActionSlotOptions>);
    }
    class VanDatetimePickerActionSlotOptions extends ViewComponentOptions {
        targetMethod: 'confirm' | 'cancel';
        slotDefault: () => Array<ViewComponent>;
    }
    class VanPickerActionSlot extends ViewComponent {
        constructor(options?: Partial<VanPickerActionSlotOptions>);
    }
    class VanPickerActionSlotOptions extends ViewComponentOptions {
        targetMethod: 'confirm' | 'cancel';
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanDialog extends ViewComponent {
        constructor(options?: Partial<VanDialogOptions>);
        openModal(): any;
        closeModal(): any;
    }
    class VanDialogOptions extends ViewComponentOptions {
        private showConfirmButton;
        private showCancelButton;
        value: nasl.core.Boolean;
        closeOnClickOverlay: nasl.core.Boolean;
        onOpen: (event: any) => any;
        onClose: (event: any) => any;
        slotDefault: () => Array<ViewComponent>;
        slotFooter: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanDivider extends ViewComponent {
        constructor(options?: Partial<VanDividerOptions>);
    }
    class VanDividerOptions extends ViewComponentOptions {
        contentPosition: 'center' | 'left' | 'right';
        private title;
        dashed: 'b' | 'a';
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanDropdownMenu extends ViewComponent {
        constructor(options?: Partial<VanDropdownMenuOptions>);
    }
    class VanDropdownMenuOptions extends ViewComponentOptions {
        private value;
        private route;
        direction: 'up' | 'down';
        overlay: nasl.core.Boolean;
        closeOnClickOverlay: nasl.core.Boolean;
        slotDefault: () => Array<VanDropdownMenu>;
    }
    class VanDropdownItem extends ViewComponent {
        constructor(options?: Partial<VanDropdownItemOptions>);
        toggle(show?: nasl.core.Boolean): any;
    }
    class VanDropdownItemOptions extends ViewComponentOptions {
        value: nasl.core.String;
        title: nasl.core.String;
        shutself: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onChange: (event: nasl.core.String) => any;
        onOpen: (event: any) => any;
        onClose: (event: any) => any;
        slotDefault: () => Array<VanDropdownItemSon>;
    }
    class VanDropdownItemSon extends ViewComponent {
        constructor(options?: Partial<VanDropdownItemSonOptions>);
    }
    class VanDropdownItemSonOptions extends ViewComponentOptions {
        private rtitle;
        private label;
        value: nasl.core.String;
        isLink: nasl.core.Boolean;
        arrowDirection: 'left' | 'up' | 'down' | 'right';
        center: nasl.core.Boolean;
        title: nasl.core.String;
        icon: nasl.core.String;
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
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
        }) => any;
        slotDefault: () => Array<ViewComponent>;
        private slotRightIcon;
    }
}
declare namespace nasl.ui {
    class VanFieldinput extends ViewComponent {
        constructor(options?: Partial<VanFieldinputOptions>);
        focus(): any;
        blur(): any;
        clear(): any;
    }
    class VanFieldinputOptions extends ViewComponentOptions {
        private prefix;
        private suffix;
        value: nasl.core.String;
        type: 'text' | 'password' | 'integer' | 'rndinteger' | 'point' | 'card';
        placeholder: nasl.core.String;
        maxlength: nasl.core.Integer;
        keyboardTitle: nasl.core.String;
        confirmText: nasl.core.String;
        confirmSize: 'default' | 'large';
        clearable: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        inputstyle: 'input' | 'password';
        keytheme: 'native' | 'custom';
        keyboardTheme: 'default' | 'custom';
        onInput: (event: Event) => any;
        onChange: (event: nasl.core.String) => any;
        onFocus: (event: FocusEvent) => any;
        onBlur: (event: FocusEvent) => any;
        onClear: (event: any) => any;
        onEnoughkey: (event: nasl.core.String) => any;
        onClickConfirm: (event: nasl.core.String) => any;
    }
}
declare namespace nasl.ui {
    class VanFieldtextarea extends ViewComponent {
        constructor(options?: Partial<VanFieldtextareaOptions>);
        focus(): any;
        blur(): any;
        clear(): any;
    }
    class VanFieldtextareaOptions extends ViewComponentOptions {
        private prefix;
        private suffix;
        value: nasl.core.String;
        placeholder: nasl.core.String;
        maxlength: nasl.core.Integer;
        showWordLimit: nasl.core.Boolean;
        autosize: nasl.core.Boolean | {
            maxHeight: nasl.core.Integer;
            minHeight: nasl.core.Integer;
        };
        clearable: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onInput: (event: Event) => any;
        onChange: (event: nasl.core.String) => any;
        onFocus: (event: FocusEvent) => any;
        onBlur: (event: FocusEvent) => any;
        onClear: (event: any) => any;
    }
}
declare namespace nasl.ui {
    class VanForComponents<T> extends ViewComponent {
        constructor(options?: Partial<VanForComponentsOptions<T>>);
        data: VanForComponentsOptions<T>['dataSource'];
    }
    class VanForComponentsOptions<T> extends ViewComponentOptions {
        dataSource: nasl.collection.List<T> | {
            total: nasl.core.Integer;
            list: nasl.collection.List<T>;
        };
        dataSchema: T;
        colnum: nasl.core.Decimal;
        wrap: nasl.core.Boolean;
        equalWidth: nasl.core.Boolean;
        slotDefault: (current?: Current<T>) => Array<ViewComponent>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanForm extends ViewComponent {
        constructor(options?: Partial<VanFormOptions>);
        validate(name?: nasl.core.String | nasl.collection.List<nasl.core.String>): any;
    }
    class VanFormOptions extends ViewComponentOptions {
        private labelAlign;
        private inputAlign;
        onSubmit: (event: {}) => any;
        onFailed: (event: {
            values: {};
        }) => any;
        slotDefault: () => Array<VanField>;
    }
    class VanField extends ViewComponent {
        constructor(options?: Partial<VanFieldOptions>);
    }
    class VanFieldOptions extends ViewComponentOptions {
        private value;
        private name;
        private type;
        private label;
        private size;
        private placeholder;
        labelLayout: 'inline' | 'block';
        required: nasl.core.Boolean;
        rules: nasl.collection.List<nasl.core.String>;
        border: nasl.core.Boolean;
        slotInput: () => Array<ViewComponent>;
        slotTitle: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanGallery<T> extends ViewComponent {
        constructor(options?: Partial<VanGalleryOptions<T>>);
    }
    class VanGalleryOptions<T> extends ViewComponentOptions {
        dataSource: nasl.collection.List<T> | {
            total: nasl.core.Integer;
            list: nasl.collection.List<T>;
        };
    }
}
declare namespace nasl.ui {
    class VanIconv extends ViewComponent {
        constructor(options?: Partial<VanIconvOptions>);
    }
    class VanIconvOptions extends ViewComponentOptions {
        name: nasl.core.String;
        icotype: 'only' | 'top' | 'left';
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
        onClick: (event: any) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanImage extends ViewComponent {
        constructor(options?: Partial<VanImageOptions>);
    }
    class VanImageOptions extends ViewComponentOptions {
        loadingType: 'loading' | 'none' | 'placeholder';
        placeholderSrc: nasl.core.String;
        src: nasl.core.String;
        fit: 'contain' | 'scale-down' | 'none' | 'fill' | 'cover';
        sr: 's' | 'r';
        preview: nasl.core.Boolean;
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
        }) => any;
    }
}
declare namespace nasl.ui {
    class VanLinearLayout extends ViewComponent {
        constructor(options?: Partial<VanLinearLayoutOptions>);
        openLoading(): any;
        closeLoading(): any;
    }
    class VanLinearLayoutOptions extends ViewComponentOptions {
        private display;
        gap: 'shrink' | 'none' | 'mini' | 'small' | 'large';
        layout: 'none' | 'inline' | 'block';
        loadingIcon: nasl.core.String;
        loadingIconRotate: nasl.core.Boolean;
        loadingText: nasl.core.String;
        mode: 'inline' | 'block' | 'flex';
        direction: 'horizontal' | 'vertical';
        justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
        alignment: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
        _alignment: 'start' | 'center' | 'end' | 'stretch';
        _justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
        wrap: nasl.core.Boolean;
        onClick: (event: any) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanNoticeBar extends ViewComponent {
        constructor(options?: Partial<VanNoticeBarOptions>);
    }
    class VanNoticeBarOptions extends ViewComponentOptions {
        private text;
        mode: 'closeable' | 'link' | 'normal';
        scrollable: nasl.core.Boolean;
        wrapable: nasl.core.Boolean;
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
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
        }) => any;
        onClose: (event: any) => any;
        onRout: (event: any) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanPickerson<T, V, M extends nasl.core.Boolean, P extends nasl.core.Boolean> extends ViewComponent {
        constructor(options?: Partial<VanPickersonOptions<T, V, M, P>>);
        value: VanPickersonOptions<T, V, M, P>['value'];
        data: VanPickersonOptions<T, V, M, P>['dataSource'];
        page: nasl.core.Integer;
        size: nasl.core.Integer;
        filterText: nasl.core.String;
        reload(): any;
    }
    class VanPickersonOptions<T, V, M extends nasl.core.Boolean, P extends nasl.core.Boolean> extends ViewComponentOptions {
        private labelField;
        private defaultIndex;
        isNew: nasl.core.Boolean;
        value: M extends true ? nasl.collection.List<V> : V;
        dataSource: nasl.collection.List<T> | {
            total: nasl.core.Integer;
            list: nasl.collection.List<T>;
        };
        dataSchema: T;
        valueField: (item: T) => V;
        textField: (item: T) => nasl.core.String;
        pageSize: nasl.core.Decimal;
        sorting: {
            field: nasl.core.String;
            order: nasl.core.String;
        };
        matchMethod: 'includes' | 'startsWith' | 'endsWith';
        pageable: nasl.core.Boolean;
        type: 'picker' | 'list';
        placeholder: nasl.core.String;
        title: nasl.core.String;
        confirmButtonText: nasl.core.String;
        cancelButtonText: nasl.core.String;
        visibleItemCount: nasl.core.Integer;
        inputAlign: 'left' | 'center' | 'right';
        showToolbar: nasl.core.Boolean;
        filterable: nasl.core.Boolean;
        multiple: nasl.core.Boolean;
        enableSelectAll: nasl.core.Boolean;
        enableSelectedCount: nasl.core.Boolean;
        closeOnClickOverlay: nasl.core.Boolean;
        initialLoad: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        clearable: nasl.core.Boolean;
        onConfirm: (event: M extends true ? nasl.collection.List<V> : V) => any;
        onCancel: (event: any) => any;
        onChange: (event: any) => any;
        slotOption: (current: Current<T>) => Array<ViewComponent>;
        slotTitle: () => Array<ViewComponent>;
        slotPannelTitle: () => Array<ViewComponent>;
        slotPickerTop: () => Array<VanPickerActionSlot>;
        slotPickerBottom: () => Array<VanPickerActionSlot>;
    }
}
declare namespace nasl.ui {
    class VanPopover extends ViewComponent {
        openModal(): any;
        closeModal(): any;
        constructor(options?: Partial<VanPopoverOptions>);
    }
    class VanPopoverOptions extends ViewComponentOptions {
        value: nasl.core.Boolean;
        overlay: nasl.core.Boolean;
        closeOnClickAction: nasl.core.Boolean;
        theme: 'dark' | 'light';
        placement: 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
        onSelect: (event: any) => any;
        onOpen: (event: any) => any;
        onClose: (event: any) => any;
        slotDefault: () => Array<VanPopoverItem>;
    }
    class VanPopoverItem extends ViewComponent {
        constructor(options?: Partial<VanPopoverItemOptions>);
    }
    class VanPopoverItemOptions extends ViewComponentOptions {
        text: nasl.core.String;
        disabled: nasl.core.Boolean;
        onClick: (event: any) => any;
    }
}
declare namespace nasl.ui {
    class VanPopup extends ViewComponent {
        constructor(options?: Partial<VanPopupOptions>);
        openModal(): any;
        closeModal(): any;
    }
    class VanPopupOptions extends ViewComponentOptions {
        value: nasl.core.Boolean;
        position: 'top' | 'bottom' | 'right' | 'left';
        closeOnClickOverlay: nasl.core.Boolean;
        onClick: (event: any) => any;
        onClickOverlay: (event: any) => any;
        onOpen: (event: any) => any;
        onClose: (event: any) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanProgress extends ViewComponent {
        constructor(options?: Partial<VanProgressOptions>);
    }
    class VanProgressOptions extends ViewComponentOptions {
        value: nasl.core.Decimal;
        pivotText: nasl.core.String;
        showPivot: nasl.core.Boolean;
        custom: nasl.core.Boolean;
        inactive: nasl.core.Boolean;
        strokeWidth: nasl.core.Decimal;
        color: nasl.core.String;
        trackColor: nasl.core.String;
        textColor: nasl.core.String;
        pivotColor: nasl.core.String;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanRadioGroup<T, V> extends ViewComponent {
        constructor(options?: Partial<VanRadioGroupOptions<T, V>>);
        value: VanRadioGroupOptions<T, V>['value'];
        data: VanRadioGroupOptions<T, V>['dataSource'];
    }
    class VanRadioGroupOptions<T, V> extends ViewComponentOptions {
        dataSource: nasl.collection.List<T> | {
            total: nasl.core.Integer;
            list: nasl.collection.List<T>;
        };
        dataSchema: T;
        value: V;
        icon: nasl.core.String;
        direction: 'horizontal' | 'vertical';
        column: nasl.core.Integer;
        disabled: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        onChange: (event: V) => any;
        slotDefault: () => Array<VanRadio<V>>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
    class VanRadio<V> extends ViewComponent {
        constructor(options?: Partial<VanRadioOptions<V>>);
    }
    class VanRadioOptions<V> extends ViewComponentOptions {
        private title;
        name: nasl.core.String;
        icon: nasl.core.String;
        labelPosition: 'right' | 'left';
        disabled: nasl.core.Boolean;
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
        }) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanRate extends ViewComponent {
        constructor(options?: Partial<VanRateOptions>);
    }
    class VanRateOptions extends ViewComponentOptions {
        value: nasl.core.Decimal;
        count: nasl.core.Integer;
        icon: nasl.core.String;
        voidIcon: nasl.core.String;
        allowHalf: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        size: nasl.core.Decimal;
        gutter: nasl.core.Decimal;
        color: nasl.core.String;
        voidColor: nasl.core.String;
        disabledColor: nasl.core.String;
        onChange: (event: nasl.core.Decimal) => any;
    }
}
declare namespace nasl.ui {
    class VanRouterView extends ViewComponent {
        constructor(options?: Partial<VanRouterViewOptions>);
    }
    class VanRouterViewOptions extends ViewComponentOptions {
    }
}
declare namespace nasl.ui {
    class VanRow extends ViewComponent {
        constructor(options?: Partial<VanRowOptions>);
    }
    class VanRowOptions extends ViewComponentOptions {
        type: '-' | 'flex';
        justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
        alignment: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
        gutter: '0' | '10' | '20' | '30';
        slotDefault: () => Array<VanCol>;
    }
    class VanCol extends ViewComponent {
        constructor(options?: Partial<VanColOptions>);
    }
    class VanColOptions extends ViewComponentOptions {
        direction: 'horizontal' | 'vertical';
        _justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
        alignment: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
        _alignment: 'start' | 'center' | 'end' | 'stretch';
        justify: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
        wrap: nasl.core.Boolean;
        gap: 'shrink' | 'none' | 'small' | 'normal' | 'large';
        span: nasl.core.Integer;
        offset: nasl.core.Integer;
        mode: 'inline' | 'flex';
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanSearch extends ViewComponent {
        constructor(options?: Partial<VanSearchOptions>);
    }
    class VanSearchOptions extends ViewComponentOptions {
        private actiontext;
        value: nasl.core.String;
        maxlength: nasl.core.Integer;
        placeholder: nasl.core.String;
        cleartrigger: 'always' | 'focus';
        inputAlign: 'left' | 'center' | 'right';
        iconalign: 'left' | 'right';
        clearable: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        shape: 'square' | 'round';
        onSearch: (event: nasl.core.String) => any;
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
        }) => any;
        onInput: (event: nasl.core.String) => any;
        onFocus: (event: FocusEvent) => any;
        onBlur: (event: FocusEvent) => any;
        onClickinput: (event: FocusEvent) => any;
        onClear: (event: any) => any;
        slotDefault: () => Array<ViewComponent>;
        slotAction: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanSidebar extends ViewComponent {
        constructor(options?: Partial<VanSidebarOptions>);
    }
    class VanSidebarOptions extends ViewComponentOptions {
        value: nasl.core.String;
        route: nasl.core.Boolean;
        onChange: (event: any) => any;
        slotDefault: () => Array<VanSidebarItem>;
    }
    class VanSidebarItem extends ViewComponent {
        constructor(options?: Partial<VanSidebarItemOptions>);
    }
    class VanSidebarItemOptions extends ViewComponentOptions {
        value: nasl.core.String;
        showbaget: nasl.core.Boolean;
        badge: nasl.core.Decimal;
        badgemax: nasl.core.Decimal;
        private title;
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
        disabled: nasl.core.Boolean;
        onClick: (event: nasl.core.Integer) => any;
        slotTitle: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanSlider extends ViewComponent {
        constructor(options?: Partial<VanSliderOptions>);
    }
    class VanSliderOptions extends ViewComponentOptions {
        value: nasl.core.Decimal;
        max: nasl.core.Decimal;
        min: nasl.core.Decimal;
        range: nasl.core.Boolean;
        custom: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        vertical: nasl.core.Boolean;
        step: nasl.core.Decimal | nasl.core.String;
        barHeight: nasl.core.Decimal;
        buttonSize: nasl.core.Decimal;
        activeColor: nasl.core.String;
        inactiveColor: nasl.core.String;
        onInput: (event: nasl.core.Decimal) => any;
        onChange: (event: nasl.core.Decimal) => any;
        onDragStart: (event: any) => any;
        onDragEnd: (event: any) => any;
        slotButton: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanStepperNew extends ViewComponent {
        constructor(options?: Partial<VanStepperNewOptions>);
    }
    class VanStepperNewOptions extends ViewComponentOptions {
        value: nasl.core.Decimal | nasl.core.Integer;
        min: nasl.core.Decimal;
        max: nasl.core.Decimal;
        decimalLength: nasl.core.Integer;
        decimalPlaces: {
            places: nasl.core.Integer | nasl.core.String;
            omit: nasl.core.Boolean;
        };
        thousandths: nasl.core.Boolean;
        percentSign: nasl.core.Boolean;
        unit: {
            type: nasl.core.String;
            value: nasl.core.String;
        };
        advancedFormat: {
            enable: nasl.core.Boolean;
            value: nasl.core.String;
        };
        placeholder: nasl.core.String;
        showPlus: nasl.core.Boolean;
        showMinus: nasl.core.Boolean;
        disablePlus: nasl.core.Boolean;
        disableMinus: nasl.core.Boolean;
        disableInput: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        theme: 'fang' | 'round';
        step: nasl.core.String | nasl.core.Decimal;
        align: 'left' | 'center' | 'right';
        onClick: (event: any) => any;
        onChange: (event: nasl.core.Decimal | nasl.core.Integer) => any;
    }
}
declare namespace nasl.ui {
    class VanSteps<T> extends ViewComponent {
        constructor(options?: Partial<VanStepsOptions<T>>);
    }
    class VanStepsOptions<T> extends ViewComponentOptions {
        dataSource: nasl.collection.List<T> | {
            total: nasl.core.Integer;
            list: nasl.collection.List<T>;
        };
        dataSchema: T;
        value: nasl.core.Integer;
        direction: 'horizontal' | 'vertical';
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onChangestep: (event: nasl.core.Integer) => any;
        slotDefault: () => Array<VanStep>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
    class VanStep extends ViewComponent {
        constructor(options?: Partial<VanStepOptions>);
    }
    class VanStepOptions extends ViewComponentOptions {
        status: 'wait' | 'process' | 'finish' | 'error';
        icon: nasl.core.String;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onClicktitle: (event: nasl.core.Integer) => any;
        onClickicon: (event: nasl.core.Integer) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanSwipe<T> extends ViewComponent {
        constructor(options?: Partial<VanSwipeOptions<T>>);
    }
    class VanSwipeOptions<T> extends ViewComponentOptions {
        dataSource: nasl.collection.List<T> | {
            total: nasl.core.Integer;
            list: nasl.collection.List<T>;
        };
        dataSchema: T;
        private loop;
        private showIndicators;
        duration: nasl.core.Decimal;
        touchable: nasl.core.Boolean;
        slotDefault: () => Array<VanSwipeItem>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
    class VanSwipeItem extends ViewComponent {
        constructor(options?: Partial<VanSwipeItemOptions>);
    }
    class VanSwipeItemOptions extends ViewComponentOptions {
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
        }) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanSwipeCell extends ViewComponent {
        constructor(options?: Partial<VanSwipeCellOptions>);
        close(): any;
    }
    class VanSwipeCellOptions extends ViewComponentOptions {
        leftWidth: nasl.core.String;
        rightWidth: nasl.core.String;
        disabled: nasl.core.Boolean;
        onClick: (event: nasl.core.String) => any;
        slotDefault: () => Array<ViewComponent>;
        slotRight: () => Array<ViewComponent>;
        slotLeft: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanSwitch extends ViewComponent {
        constructor(options?: Partial<VanSwitchOptions>);
    }
    class VanSwitchOptions extends ViewComponentOptions {
        value: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
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
        }) => any;
        onChange: (event: nasl.core.Boolean) => any;
    }
}
declare namespace nasl.ui {
    class VanTabbar extends ViewComponent {
        constructor(options?: Partial<VanTabbarOptions>);
    }
    class VanTabbarOptions extends ViewComponentOptions {
        value: nasl.core.String;
        fixed: nasl.core.Boolean;
        route: nasl.core.Boolean;
        border: nasl.core.Boolean;
        onChange: (event: nasl.core.String) => any;
        slotDefault: () => Array<VanTabbarItem>;
    }
    class VanTabbarItem extends ViewComponent {
        constructor(options?: Partial<VanTabbarItemOptions>);
    }
    class VanTabbarItemOptions extends ViewComponentOptions {
        name: nasl.core.String;
        showbaget: nasl.core.Boolean;
        badge: nasl.core.Decimal;
        badgemax: nasl.core.Decimal;
        icon: nasl.core.String;
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
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
        }) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanTabs extends ViewComponent {
        constructor(options?: Partial<VanTabsOptions>);
    }
    class VanTabsOptions extends ViewComponentOptions {
        value: nasl.core.String;
        type: 'line' | 'card';
        sticky: nasl.core.Boolean;
        scrollspystr: 'no' | 'scrollspy';
        swipeable: nasl.core.Boolean;
        animated: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
        onClick: (event: nasl.core.String) => any;
        onChange: (event: nasl.core.String) => any;
        slotDefault: () => Array<VanTab>;
    }
    class VanTab extends ViewComponent {
        constructor(options?: Partial<VanTabOptions>);
    }
    class VanTabOptions extends ViewComponentOptions {
        private title;
        name: nasl.core.String;
        badgebtn: nasl.core.Boolean;
        badge: nasl.core.Decimal;
        badgemax: nasl.core.Decimal;
        disabled: nasl.core.Boolean;
        slotDefault: () => Array<ViewComponent>;
        slotTitle: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanTag extends ViewComponent {
        constructor(options?: Partial<VanTagOptions>);
    }
    class VanTagOptions extends ViewComponentOptions {
        type: 'primary' | 'success' | 'danger' | 'warning';
        mark: nasl.core.Boolean;
        closeable: nasl.core.Boolean;
        size: 'large' | 'medium' | 'small';
        round: nasl.core.Boolean;
        plain: nasl.core.Boolean;
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
        }) => any;
        onBeforeClose: (event: any) => any;
        onClose: (event: any) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanText extends ViewComponent {
        constructor(options?: Partial<VanTextOptions>);
    }
    class VanTextOptions extends ViewComponentOptions {
        text: nasl.core.String;
        color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'disabled';
        display: 'inline' | 'block';
        overflow: 'normal' | 'ellipsis' | 'break' | 'nowrap';
        size: 'small' | 'normal' | 'large' | 'huge';
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
        }) => any;
    }
}
declare namespace nasl.ui {
    class VanToast extends ViewComponent {
        constructor(options?: Partial<VanToastOptions>);
        open(): any;
        close(): any;
    }
    class VanToastOptions extends ViewComponentOptions {
        private value;
        message: nasl.core.String;
        type: 'success' | 'warning' | 'fail' | 'loading' | 'custom';
        customIcon: nasl.core.String;
        duration: nasl.core.Integer;
        private position;
        onOpen: (event: any) => any;
        onClose: (event: any) => any;
    }
}
declare namespace nasl.ui {
    class VanUploader extends ViewComponent {
        constructor(options?: Partial<VanUploaderOptions>);
        chooseFile(): any;
    }
    class VanUploaderOptions extends ViewComponentOptions {
        private resultType;
        value: nasl.collection.List<{
            name: nasl.core.String;
            url: nasl.core.String;
            size: nasl.core.Integer;
        }> | nasl.core.String;
        name: nasl.core.String;
        accept: nasl.core.String;
        url: nasl.core.String;
        headers: Object;
        data: Object;
        withCredentials: nasl.core.Boolean;
        urlField: nasl.core.String;
        converter: 'json' | 'simple';
        private autoUpload;
        multiple: nasl.core.Boolean;
        maxCount: nasl.core.Integer;
        maxSize: nasl.core.Decimal;
        capture: 'waga' | 'camera';
        access: 'public' | 'private';
        ttl: nasl.core.Boolean;
        ttlValue: nasl.core.Integer;
        viaOriginURL: nasl.core.Boolean;
        lcapIsCompress: nasl.core.Boolean;
        readonly: nasl.core.Boolean;
        disabled: nasl.core.Boolean;
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
        }) => any;
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
        }) => any;
        onDelete: (event: {
            massage: nasl.core.String;
            name: nasl.core.String;
            size: nasl.core.Integer;
            uid: nasl.core.Integer;
            url: nasl.core.String;
            index: nasl.core.Integer;
        }) => any;
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
        }) => any;
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
        }) => any;
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
        }) => any;
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
        }) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanAbsoluteLayout extends ViewComponent {
        constructor(options?: Partial<VanAbsoluteLayoutOptions>);
    }
    class VanAbsoluteLayoutOptions extends ViewComponentOptions {
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
        }) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanCopy extends ViewComponent {
        constructor(options?: Partial<VanCopyOptions>);
    }
    class VanCopyOptions extends ViewComponentOptions {
        private text;
        private successText;
        private feedback;
        private placement;
        private hideDelay;
        value: nasl.core.String;
        disabled: nasl.core.Boolean;
        onCopy: (event: {
            value: nasl.core.String;
        }) => any;
        slotDefault: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanCountDownNew extends ViewComponent {
        start(): any;
        pause(): any;
        continue(): any;
        stop(): any;
        constructor(options?: Partial<VanCountDownNewOptions>);
    }
    class VanCountDownNewOptions extends ViewComponentOptions {
        timer: nasl.core.Integer;
        reverse: 'positive' | 'negative';
        autostart: nasl.core.Boolean;
        hideMinute: nasl.core.Boolean;
        onStart: (event: any) => any;
        onPause: (event: any) => any;
        onContinue: (event: any) => any;
        onStop: (event: any) => any;
    }
}
declare namespace nasl.ui {
    class VanGridView<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean> extends ViewComponent {
        constructor(options?: Partial<VanGridViewOptions<T, V, P, M>>);
        data: VanGridViewOptions<T, V, P, M>['dataSource'];
        page: nasl.core.Integer;
        size: nasl.core.Integer;
        filterText: nasl.core.String;
        sort: nasl.core.String;
        order: nasl.core.String;
        reload(): any;
    }
    class VanGridViewOptions<T, V, P extends nasl.core.Boolean, M extends nasl.core.Boolean> extends ViewComponentOptions {
        private value;
        private textField;
        private valueField;
        private cancelable;
        private multiple;
        private clearable;
        dataSource: nasl.collection.List<T> | {
            total: nasl.core.Integer;
            list: nasl.collection.List<T>;
        };
        dataSchema: T;
        pageable: '' | 'auto-more' | 'load-more';
        pageSize: nasl.core.Integer;
        private pageNumber;
        filterable: nasl.core.Boolean;
        remotePaging: nasl.core.Boolean;
        remoteFiltering: nasl.core.Boolean;
        pullRefresh: nasl.core.Boolean;
        pullingText: nasl.core.String;
        loosingText: nasl.core.String;
        successText: nasl.core.String;
        successDuration: nasl.core.Integer;
        pullDistance: nasl.core.Decimal;
        placeholder: nasl.core.String;
        initialLoad: nasl.core.Boolean;
        loadingText: nasl.core.String;
        private error;
        errorText: nasl.core.String;
        emptyText: nasl.core.String;
        iffall: nasl.core.Boolean;
        col: nasl.core.Integer;
        private readonly;
        private disabled;
        onLoad: (event: any) => any;
        slotDefault: () => Array<VanCardu>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanIframe extends ViewComponent {
        constructor(options?: Partial<VanIframeOptions>);
    }
    class VanIframeOptions extends ViewComponentOptions {
        src: nasl.core.String;
        onLoad: (event: any) => any;
    }
}
declare namespace nasl.ui {
    class VanLink extends ViewComponent {
        constructor(options?: Partial<VanLinkOptions>);
    }
    class VanLinkOptions extends ViewComponentOptions {
        private to;
        private replace;
        private append;
        private decoration;
        text: nasl.core.String;
        color: 'default' | 'light' | 'success' | 'warning' | 'danger';
        display: 'inline' | 'block';
        linkType: 'destination' | 'download';
        hrefAndTo: nasl.core.String;
        target: '_blank' | '_self' | '_parent' | '_top';
        disabled: nasl.core.Boolean;
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
        }) => any;
    }
}
declare namespace nasl.ui {
    class VanListView<T, V, P, M> extends ViewComponent {
        constructor(options?: Partial<VanListViewOptions<T, V, P, M>>);
        data: VanListViewOptions<T, V, P, M>['dataSource'];
        page: nasl.core.Integer;
        size: nasl.core.Integer;
        filterText: nasl.core.String;
        reload(): any;
    }
    class VanListViewOptions<T, V, P, M> extends ViewComponentOptions {
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
        dataSource: nasl.collection.List<T> | {
            total: nasl.core.Integer;
            list: nasl.collection.List<T>;
        };
        dataSchema: T;
        valueField: (item: T) => V;
        textField: (item: T) => any;
        value: M extends true ? nasl.collection.List<V> : V;
        pageable: '' | 'auto-more' | 'load-more' | 'pagination';
        pageSize: nasl.core.Integer;
        private pageNumber;
        filterable: nasl.core.Boolean;
        placeholder: nasl.core.String;
        clearable: nasl.core.Boolean;
        private selectable;
        multiple: nasl.core.Boolean;
        selectedIcon: nasl.core.String;
        unselectedIcon: nasl.core.String;
        pullRefresh: nasl.core.Boolean;
        pullingText: nasl.core.String;
        loosingText: nasl.core.String;
        successText: nasl.core.String;
        successDuration: nasl.core.Integer;
        pullDistance: nasl.core.Decimal;
        hiddenempty: nasl.core.Boolean;
        initialLoad: nasl.core.Boolean;
        designerMode: 'success' | 'empty' | 'loading' | 'error';
        loadingText: nasl.core.String;
        loading: nasl.core.Boolean;
        errorText: nasl.core.String;
        error: nasl.core.Boolean;
        emptyText: nasl.core.String;
        striped: nasl.core.Boolean;
        onInput: (event: M extends true ? nasl.collection.List<V> : V) => any;
        onSelect: (event: {
            selected: nasl.core.Boolean;
            item: T;
            value: M extends true ? nasl.collection.List<V> : V;
        }) => any;
        onChange: (event: {
            item: T;
            value: M extends true ? nasl.collection.List<V> : V;
        }) => any;
        onBeforeLoad: (event: any) => any;
        onLoad: (event: any) => any;
        slotDefault: () => Array<VanCell>;
        slotItem: (current: Current<T>) => Array<ViewComponent>;
        slotPrev: () => Array<ViewComponent>;
        slotNext: () => Array<ViewComponent>;
    }
}
declare namespace nasl.ui {
    class VanPopupCombination extends ViewComponent {
        constructor(options?: Partial<VanPopupCombinationOptions>);
        open(): any;
        close(): any;
        toggle(opened?: nasl.core.Boolean): any;
        update(): any;
        scheduleUpdate(): any;
    }
    class VanPopupCombinationOptions extends ViewComponentOptions {
        private trigger;
        private offset;
        private followCursor;
        private mergeBorders;
        title: nasl.core.String;
        opened: nasl.core.Boolean;
        placement: 'top' | 'bottom' | 'left' | 'right';
        hideDelay: nasl.core.Integer;
        display: 'inline' | 'block';
        private ellipsis;
        disabled: nasl.core.Boolean;
        onBeforeOpen: (event: any) => any;
        onOpen: (event: any) => any;
        onBeforeClose: (event: any) => any;
        onClose: (event: any) => any;
        slotDefault: () => Array<ViewComponent>;
        slotReference: () => Array<ViewComponent>;
    }
}
