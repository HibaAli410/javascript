const body = document.getElementById('representive')
const table = document.createElement("table")
body.appendChild(table)
const thead = document.createElement("thead")
const tbody = document.createElement("tbody")
const tfoot = document.createElement("tfoot")
const tr = document.createElement("tr")
const td = document.createElement("td")
const td_2 = document.createElement("td")
const td_3 = document.createElement("td")
table.appendChild(thead)
thead.appendChild(tr)
tr.appendChild(td)
tr.appendChild(td_2)
tr.appendChild(td_3)
td.innerHTML = "SNumber :"
td_2.innerHTML="First Name :"
td_3.innerHTML="Last Name  :"

const tr_1 = document.createElement("tr")
const col_1 = document.createElement("td")
const col_2 = document.createElement("td")
const col_3 = document.createElement("td")

table.appendChild(tbody)
tbody.appendChild(tr_1)
tr_1.appendChild(col_1)
tr_1.appendChild(col_2)
tr_1.appendChild(col_3)
col_1.innerHTML = "01"
col_2.innerHTML = "Thomos"
col_3.innerHTML="Robbinson"

const tr_2 = document.createElement("tr")
const col_11 = document.createElement("td")
const col_22 = document.createElement("td")
const col_33 = document.createElement("td")


tbody.appendChild(tr_2)
tr_2.appendChild(col_11)
tr_2.appendChild(col_22)
tr_2.appendChild(col_33)
col_11.innerHTML = "02"
col_22.innerHTML = "adam"
col_33.innerHTML="gray"

table.appendChild(tfoot)


console.log(body)