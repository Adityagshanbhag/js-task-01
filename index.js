$(document).ready(function () {
  var settings = {
    url: "https://dummyjson.com/products?limit=100",
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    var jsonData = response;

    $("#tabPanel").dxTabPanel({
      items: [
        {
          title: "Active Forms",
          template: function () {
            $("#dataGrid").dxDataGrid({
              dataSource: jsonData["products"],
              keyExpr: "id",
              showRowLines: true,
              rowAlternationEnabled: true,
              showBorders: true,
              columns: [
                {
                  dataField: "id",
                  dataType: "number",
                  width: 50,
                },
                "title",
                "brand",
                "category",
                {
                  dataField: "description",
                  width: 450,
                },
                {
                  dataField: "rating",
                  dataType: "number",
                },
                {
                  dataField: "price",
                  dataType: "number",
                },
                {
                  dataField: "discountPercentage",
                  dataType: "number",
                },
                {
                  dataField: "stock",
                  dataType: "number",
                },
                {
                  dataField: "icon",
                  caption: "",
                  width: 40,
                  allowFiltering: false,
                  allowSorting: false,
                  cellTemplate(container) {
                    $("<div>")
                      .html('<i class="fa fa-eye" aria-hidden="true"></i>')
                      .appendTo(container);
                  },
                },
              ],
              allowColumnReordering: true,
              allowColumnResizing: true,
              filterRow: { visible: true },
              searchPanel: { visible: true },
              selection: {
                mode: "single",
              },
              onSelectionChanged: function (selectedItems) {
                const data = selectedItems.selectedRowsData[0];
                if (data) {
                  window.location.href = "about.html?id=" + data["id"];
                }
              },
            });
          },
        },
        {
          title: "History",
          template: function () {
            // $("#dataGrid").dxDataGrid("instance").option("visible", false);
          },
        },
      ],
    });
  });

  const data = [
    "Automotive",
    "Fragnances",
    "Furniture",
    "Groceries",
    "Home-decoration",
    "Laptops",
    "Lighting",
    "Motorcycle",
    "Skincare",
    "Smartphones",
    "Sunglasses",
  ];

  $(function () {
    $("#selectBox").dxSelectBox({
      dataSource: data,
      valueExpr: "ID",
      searchEnabled: true,
      placeholder: "Select Category....",
    });
  });
});
