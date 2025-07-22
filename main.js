async function rendertable(data, demo) {
    let tabledata = await fetch("student_info.json");
    let json_data = await tabledata.json();

    demo = document.getElementById("demo");
    const mytable = document.createElement("table");
    demo.appendChild(mytable);
    const thead = document.createElement("tr");

    for (let head in json_data[0]) {
        const th = document.createElement('th');
        thead.appendChild(th);
        th.innerHTML = head.toUpperCase();
    }
    mytable.appendChild(thead);
    json_data.forEach((element) => {

        //console.log(element);
        //console.log(element);
        const tr = document.createElement("tr");
        for (let key in element) {
            const td = document.createElement("td");
            tr.appendChild(td);
            td.innerHTML = element[key];
        }
        mytable.append(tr);
    });

}
rendertable();





