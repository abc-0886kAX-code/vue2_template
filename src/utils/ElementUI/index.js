/*
 * @Author: yjl
 * @Date: 2021-05-06 15:06:54
 * @LastEditors: zhangyang
 * @LastEditTime: 2022-01-21 14:59:00
 * @Description: file content
 */

import {
    Autocomplete, Button, ButtonGroup, Checkbox, CheckboxGroup, DatePicker, Dialog, Form,
    FormItem, Image, Input, InputNumber, Loading, Notification, scrollbar, Table,
    TableColumn, TabPane, Tabs, Tree, InfiniteScroll, Row, Col,
    Select,
    Slider,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Option,
    OptionGroup,
} from 'element-ui';
import Vue from 'vue';
import { SetNotify, SetNotifyError, SetNotifySuccess, SetNotifyWarning } from './notify';

Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Autocomplete);
Vue.use(Button);
Vue.use(ButtonGroup)
Vue.use(Slider);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(scrollbar);
Vue.use(CheckboxGroup);
Vue.use(Checkbox);
Vue.use(Loading);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Tree);
Vue.use(Image);
Vue.use(DatePicker);
Vue.use(InfiniteScroll)
Vue.use(Row)
Vue.use(Col)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

Vue.prototype.$notify = Notification;

const notify = (title, type, msg) => Notification(SetNotify(title, type, msg));
const notifyS = (msg) => Notification(SetNotifySuccess(msg));
const notifyW = (msg) => Notification(SetNotifyWarning(msg));
const notifyE = (msg) => Notification(SetNotifyError(msg));

export default {
    notify,
    notifyS,
    notifyW,
    notifyE
}
