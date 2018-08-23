"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var auswahl_1 = __importDefault(require("./components/auswahl"));
var overview_1 = __importDefault(require("./components/overview"));
var MMT = /** @class */ (function (_super) {
    __extends(MMT, _super);
    function MMT(props) {
        var _this = _super.call(this, props) || this;
        _this.selectedProject = "";
        _this.state = { value: "" };
        _this.onClickEvent = _this.onClickEvent.bind(_this);
        _this.callback = _this.callback.bind(_this);
        return _this;
    }
    MMT.prototype.render = function () {
        var arr = ["Proj 1", "Proj 2", "Proj 3"];
        return (React.createElement("div", null,
            React.createElement(auswahl_1.default, { collection: arr, onAuswahl: this.callback }),
            React.createElement("br", null),
            React.createElement("div", null, this.state.value),
            React.createElement(overview_1.default, null)));
    };
    MMT.prototype.callback = function (selectedProject) {
        this.selectedProject = selectedProject;
        this.setState({ value: this.selectedProject });
    };
    MMT.prototype.onClickEvent = function (e) {
        alert(this.selectedProject);
    };
    return MMT;
}(React.Component));
exports.default = MMT;
