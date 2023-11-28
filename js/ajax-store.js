const getTools = () => {
    const url = "./data/inventory.json";
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };
    return fetch(url, options).then((response) => response.json());
};
const createCategoryHTML = (category) => {
    const categoryElement = document.createElement("span");
    categoryElement.classList.add("badge", "rounded-pill");
    switch (category) {
        case "tool":
            categoryElement.classList.add("bg-primary");
            break;
        case "powered":
            categoryElement.classList.add("bg-info");
            break;
        case "gas":
            categoryElement.classList.add("bg-warning");
            break;
        case "outdoor":
            categoryElement.classList.add("bg-success");
            break;
        default:
            categoryElement.classList.add("bg-secondary");
            break;
    }
    categoryElement.textContent = category;
    return categoryElement.outerHTML;
};
const createToolElement = (tool) => {
    const toolElement = document.createElement("tr");
    toolElement.classList.add("align-middle");
    toolElement.innerHTML = `
         <td scope="row">
             <div class="d-flex align-items-center">
                 ${tool.title}
             </div>
             <strong>${tool.title}</strong>
         </td>
         <td>
             <div class="d-flex align-items-center">
                 ${tool.quantity}
             </div>
             ${tool.quantity}
         </td>
         <td>
             <div class="d-flex align-items-center">
                 ${tool.price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    })}
             </div>
         </td>
         <td>
             <div class="d-flex align-items-center flex-wrap gap-1">
             <div class="d-flex align-items-center gap-1 h-100">
                 ${tool.categories
        .map((category) => {
            return createCategoryHTML(category);
        const updateToolsElements = (tools) => {
                toolsFragment.appendChild(toolElement);
            };
            tableBody.appendChild(toolsFragment);
            // initialize data table (https://datatables.net/examples/basic_init/zero_configuration.html)
            let table = new DataTable("#tool-table", {
                sortable: true,
                paging: false,
                labels: {
                    noRows: "No tools found",
                },
                columnDefs: [
                    {
                        target: 3,
                        sortable: false,
                    },
                    {
                        target: 4,
                        sortable: false,
                    },
                ],
            });