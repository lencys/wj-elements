import "./themes/light.scss";
import "./themes/dark.scss";
import { default as WJElement } from "./wj-element/wj-element.js";
import { defaultStoreActions, store } from "./wj-store/store.js";

import { bindRouterLinks, withRouterLinks } from './wj-router/plugins/slick-router/middlewares/router-links.js';
import { fetchAndParseCSS } from "./utils/animations.js";
import { Localizer } from "./utils/localize.js";
import { sk } from "./translations/sk.js";
import { en } from "./translations/en.js";

import { default as Animation } from "./wj-animation/animation.js";
import { default as Aside } from "./wj-aside/aside.js";
import { default as Avatar } from "./wj-avatar/avatar.js";
import { default as Badge } from "./wj-badge/badge.js";
import { default as Breadcrumb } from "./wj-breadcrumb/breadcrumb.js";
import { default as Breadcrumbs } from "./wj-breadcrumbs/breadcrumbs.js";
import { default as Button } from "./wj-button/button.js";
import { default as ButtonGroup } from "./wj-button-group/button-group.js";
import { default as Card } from "./wj-card/card.js";
import { default as CardContent } from "./wj-card-content/card-content.js";
import { default as CardControls } from "./wj-card-controls/card-controls.js";
import { default as CardHeader } from "./wj-card-header/card-header.js";
import { default as CardSubtitle } from "./wj-card-subtitle/card-subtitle.js";
import { default as CardTitle } from "./wj-card-title/card-title.js";
import { default as Carousel } from "./wj-carousel/carousel.js";
import { default as CarouselItem } from "./wj-carousel-item/carousel-item.js";
import { default as Checkbox } from "./wj-checkbox/checkbox.js";
import { default as Chip } from "./wj-chip/chip.js";
import { default as Col } from "./wj-col/col.js";
import { default as ColorPicker } from "./wj-color-picker/color-picker.js";
import { default as Container } from "./wj-container/container.js";
import { default as CopyButton } from "./wj-copy-button/copy-button.js";
import { default as Dialog } from "./wj-dialog/dialog.js";
import { default as Divider } from "./wj-divider/divider.js";
import { default as Dropdown } from "./wj-dropdown/dropdown.js";
import { default as FileUpload } from "./wj-file-upload/file-upload.js";
import { default as FileUploadItem } from "./wj-file-upload-item/file-upload-item.js";
import { default as Footer } from "./wj-footer/footer.js";
import { default as FormatDigital } from "./wj-format-digital/format-digital.js";
import { default as Grid } from "./wj-grid/grid.js";
import { default as Header } from "./wj-header/header.js";
import { default as Icon } from "./wj-icon/icon.element.js";
import { default as IconPicker } from "./wj-icon-picker/icon-picker.js";
import { default as Img } from "./wj-img/img.js";
import { default as ImgComparer } from "./wj-img-comparer/img-comparer.js";
import { default as InfiniteScroll } from "./wj-infinite-scroll/infinite-scroll.js";
import { default as Input } from "./wj-input/input.js";
import { default as InputFile } from "./wj-input-file/input-file.js";
import { default as Item } from "./wj-item/item.js";
import { default as Label } from "./wj-label/label.js";
import { default as List } from "./wj-list/list.js";
import { default as Main } from "./wj-main/main.js";
import { default as Masonry} from "./wj-masonry/masonry.js";
import { default as Menu } from "./wj-menu/menu.js";
import { default as MenuButton } from "./wj-menu-button/menu-button.js";
import { default as MenuItem } from "./wj-menu-item/menu-item.js";
import { default as MenuLabel } from "./wj-menu-label/menu-label.js";
import { default as Option } from "./wj-option/option.js";
import { default as Options } from "./wj-options/options.js";
import { default as Popup } from "./wj-popup/popup.js";
import { default as ProgressBar } from "./wj-progress-bar/progress-bar.js";
import { default as Radio } from "./wj-radio/radio.js";
import { default as RadioGroup } from "./wj-radio-group/radio-group.js";
import { default as Rate } from "./wj-rate/rate.js";
import { default as RelativeTime } from "./wj-relative-time/relative-time.js";
import { default as Route } from "./wj-route/route.js";
import { default as Routerx } from "./wj-router/router.js";
import { default as RouterLink } from "./wj-router-link/router-link.js";
import "./wj-router-outlet/router-outlet.js";
import { default as Row } from "./wj-row/row.js";
import { default as Select } from "./wj-select/select.js";
import { default as Slider } from "./wj-slider/slider.js";
import { default as SplitView } from "./wj-split-view/split-view.js";
import { default as Tab } from "./wj-tab/tab.js";
import { default as TabGroup } from "./wj-tab-group/tab-group.js";
import { default as TabPanel } from "./wj-tab-panel/tab-panel.js";
import { default as Textarea } from "./wj-textarea/textarea.js";
import { default as Thumbnail } from "./wj-thumbnail/thumbnail.js";
import { default as Toast } from "./wj-toast/toast.js";
import { default as Toggle } from "./wj-toggle/toggle.js";
import { default as Toolbar } from "./wj-toolbar/toolbar.js";
import { default as ToolbarAction } from "./wj-toolbar-action/toolbar-action.js";
import { default as Tooltip } from "./wj-tooltip/tooltip.js";
import { default as VisuallyHidden } from "./wj-visually-hidden/visually-hidden.js";

export { WJElement, defaultStoreActions, store, bindRouterLinks, withRouterLinks, fetchAndParseCSS, Localizer,
  Aside,
  Animation,
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
  Carousel,
  CarouselItem,
  Checkbox,
  Chip,
  Col,
  ColorPicker,
  Container,
  CopyButton,
  Dialog,
  Divider,
  Dropdown,
  FileUpload,
  FileUploadItem,
  Footer,
  FormatDigital,
  Grid,
  Header,
  Icon,
  IconPicker,
  Img,
  ImgComparer,
  InfiniteScroll,
  Input,
  InputFile,
  Item,
  Label,
  List,
  Main,
  Masonry,
  Menu,
  MenuButton,
  MenuItem,
  MenuLabel,
  Option,
  Options,
  Popup,
  ProgressBar,
  Radio,
  RadioGroup,
  Rate,
  RelativeTime,
  Route,
  Routerx,
  RouterLink,
  Row,
  Select,
  Slider,
  SplitView,
  Tab,
  TabGroup,
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