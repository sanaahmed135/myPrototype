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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_data_grid_1 = __importDefault(require("react-data-grid"));
var react_1 = __importDefault(require("react"));
// import update from 'immutability-helper';
var OverView = /** @class */ (function (_super) {
    __extends(OverView, _super);
    function OverView(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.columns = new Array();
        _this.getRowbyIndex = function (index) {
            return _this.state.rows[index];
        };
        _this.createColumns();
        // Setting the Row property of State.  All properties of the state must haveto be set
        _this.state = { rows: _this.getRows(10), updatedText: "" };
        return _this;
    }
    OverView.prototype.render = function () {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("h1", null,
                " Updated Title :  ",
                this.state.updatedText),
            react_1.default.createElement(react_data_grid_1.default, { enableCellSelect: true, columns: this.columns, rowGetter: this.getRowbyIndex, rowsCount: this.state.rows.length, minHeight: 500 })));
    };
    // handleGridRowsUpdated = (e : ReactGrid.GridRowsUpdatedEvent ) : void => {
    //   let rows :Array<Row> = this.state.rows.slice();
    //   for (let i : number = e.fromRow; i <= e.toRow; i++) {
    //     let rowToUpdate = rows[i];
    //     let updatedRow = update(rowToUpdate, {$merge: e.updated});
    //     rows[i] = updatedRow;
    //     this.setState ({updatedText: updatedRow.task});
    //   }
    //   this.setState({ rows : rows });
    // };
    OverView.prototype.createColumns = function () {
        this.columns.push(new Column("id", "ID"));
        this.columns.push(new Column("task", "Title"));
        this.columns.push(new Column("complete", "Complete"));
    };
    OverView.prototype.getRows = function (numberOfRows) {
        var rows = new Array();
        for (var i = 1; i < numberOfRows; i++) {
            var complete = Math.min(100, Math.round(Math.random() * 110));
            // create the row object and add it to the array
            var row = new Row(i, "Title " + i, complete);
            rows.push(row);
        }
        return rows;
    };
    ;
    return OverView;
}(react_1.default.Component));
exports.default = OverView;
var Column = /** @class */ (function () {
    function Column(_key, _name) {
        this.width = 50;
        this.key = _key;
        this.name = _name;
        this.editable = true;
        this.width = 200;
    }
    return Column;
}());
var Row = /** @class */ (function () {
    function Row(_id, _title, _complete) {
        this.id = _id;
        this.task = _title;
        this.complete = _complete;
    }
    return Row;
}());
