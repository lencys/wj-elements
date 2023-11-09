import { default as WJElement } from "./wj-element/wj-element.js";
import { defaultStoreActions, store } from "./wj-store/store.js";

import "./scss/global.scss";

// SLICK ROUTER
import { bindRouterLinks, withRouterLinks } from './wj-router/plugins/slick-router/middlewares/router-links.js';

import { Aside } from "./wj-aside/aside.js";
import { Avatar } from "./wj-avatar/avatar.js";
import { Badge } from "./wj-badge/badge.js";
import { Breadcrumb } from "./wj-breadcrumb/breadcrumb.js";
import { Breadcrumbs } from "./wj-breadcrumbs/breadcrumbs.js";
import { Button } from "./wj-button/button.js";
import { ButtonGroup } from "./wj-button-group/button-group.js";
import { Card } from "./wj-card/card.js";
import { CardContent } from "./wj-card-content/card-content.js";
import { CardControls } from "./wj-card-controls/card-controls.js";
import { CardHeader } from "./wj-card-header/card-header.js";
import { CardSubtitle } from "./wj-card-subtitle/card-subtitle.js";
import { CardTitle } from "./wj-card-title/card-title.js";
import { Col } from "./wj-col/col.js";
import { ColorPicker } from "./wj-color-picker/color-picker.js";
import { Container } from "./wj-container/container.js";
import { CopyButton } from "./wj-copy-button/copy-button.js";
import { Dialog } from "./wj-dialog/dialog.js";
import { Divider } from "./wj-divider/divider.js";
import { Dropdown } from "./wj-dropdown/dropdown.js";
import { ExampleElement } from "./wj-example-element/example-element.js";
import { Footer } from "./wj-footer/footer.js";
import { Grid } from "./wj-grid/grid.js";
import { Header } from "./wj-header/header.js";
import { Checkbox } from "./wj-checkbox/checkbox.js";
import { Chip } from "./wj-chip/chip.js";
import { Icon } from "./wj-icon/icon.js";
import { IconPicker } from "./wj-icon-picker/icon-picker.js";
import { Img } from "./wj-img/img.js";
import { ImgComparer } from "./wj-img-comparer/img-comparer.js";
import { InfiniteScroll } from "./wj-infinite-scroll/infinite-scroll.js";
import { Input } from "./wj-input/input.js";
import { Item } from "./wj-item/item.js";
import { Label } from "./wj-label/label.js";
import { List } from "./wj-list/list.js";
import { Main } from "./wj-main/main.js";
import { Menu } from "./wj-menu/menu.js";
import { MenuButton } from "./wj-menu-button/menu-button.js";
import { MenuItem } from "./wj-menu-item/menu-item.js";
import { MenuLabel } from "./wj-menu-label/menu-label.js";
import { NavMenu } from "./wj-nav-menu/nav-menu.js";
import { Option } from "./wj-option/option.js";
import { Options } from "./wj-options/options.js";
import { Popup } from "./wj-popup/popup.js";
import { ProgressBar } from "./wj-progress-bar/progress-bar.js";
import { Radio } from "./wj-radio/radio.js";
import { RadioGroup } from "./wj-radio-group/radio-group.js";
import { Route } from "./wj-route/route.js";
import { Routerx } from "./wj-router/router.js";
import { RouterLink } from "./wj-router-link/router-link.js";
import "./wj-router-outlet/router-outlet.js";
import { Row } from "./wj-row/row.js";
import { Select } from "./wj-select/select.js";
import { Slider } from "./wj-slider/slider.js";
import { SplitView } from "./wj-split-view/split-view.js";
import { Tab } from "./wj-tab/tab.js";
import { TabGroup } from "./wj-tab-group/tab-group.js";
import { TabPanel } from "./wj-tab-panel/tab-panel.js";
import { Textarea } from "./wj-textarea/textarea.js";
import { Thumbnail } from "./wj-thumbnail/thumbnail.js";
import { Toast } from "./wj-toast/toast.js";
import { Toggle } from "./wj-toggle/toggle.js";
import { Toolbar } from "./wj-toolbar/toolbar.js";
import { ToolbarAction } from "./wj-toolbar-action/toolbar-action.js";
import { Tooltip } from "./wj-tooltip/tooltip.js";
import { VisuallyHidden } from "./wj-visually-hidden/visually-hidden.js";

export { WJElement, defaultStoreActions, store, bindRouterLinks, withRouterLinks,
  Aside,
  Avatar,
  Badge,
  Breadcrumb,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardControls,
  CardHeader,
  CardSubtitle,
  CardTitle,
  Col,
  ColorPicker,
  Container,
  CopyButton,
  Dialog,
  Divider,
  Dropdown,
  ExampleElement,
  Footer,
  Grid,
  Header,
  Checkbox,
  Chip,
  Icon,
  IconPicker,
  Img,
  ImgComparer,
  InfiniteScroll,
  Input,
  Item,
  Label,
  List,
  Main,
  Menu,
  MenuButton,
  MenuItem,
  MenuLabel,
  NavMenu,
  Option,
  Options,
  Popup,
  ProgressBar,
  Radio,
  RadioGroup,
  Route,
  Routerx,
  RouterLink,
  Row,
  Select,
  Slider,
  SplitView,
  Tab,
  TabGroup,
  // Table,
  TabPanel,
  Textarea,
  Thumbnail,
  Toast,
  Toggle,
  Toolbar,
  ToolbarAction,
  Tooltip,
  VisuallyHidden
};