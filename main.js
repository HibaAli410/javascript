// async function rendertable(data, demo) {
//     let tabledata = await fetch("student_info.json");
//     let json_data = await tabledata.json();

//     demo = document.getElementById("demo");
//     const mytable = document.createElement("table");
//     demo.appendChild(mytable);
//     const thead = document.createElement("tr");

//     for (let head in json_data[0]) {
//         const th = document.createElement('th');
//         thead.appendChild(th);
//         th.innerHTML = head.toUpperCase();
//     }
//     mytable.appendChild(thead);
//     json_data.forEach((element) => {

//         //console.log(element);
//         //console.log(element);
//         const tr = document.createElement("tr");
//         for (let key in element) {
//             const td = document.createElement("td");
//             tr.appendChild(td);
//             td.innerHTML = element[key];
//         }
//         mytable.append(tr);
//     });

// }
// rendertable();

function rendertable(data, id) {
    const table = document.createElement("table");
    id = document.getElementById('demo')
    id.appendChild(table);
    const thead = document.createElement("tr");
    for (let head in data[0]) {
        const th = document.createElement("th");
        th.innerHTML = head.toUpperCase();
        thead.appendChild(th);
    }
    table.appendChild(thead);
    data.forEach(meta_data => {
        const tr = document.createElement('tr');
        for (let student_info in meta_data) {
            const td = document.createElement("td");
            td.innerHTML = meta_data[student_info];
            tr.appendChild(td);
        }
        table.appendChild(tr)

    });
}
async function apidata(tabledata, stud_data) {
    tabledata = await fetch("student_info.json");
    stud_data = await tabledata.json();
    //console.log(stud_data);
    rendertable(stud_data, demo);

}
apidata();






