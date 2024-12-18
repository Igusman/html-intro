function addTask() {
    const time = new Date()
    const timeString = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    event.preventDefault();
    const id = document.getElementById("input1").value
    const td1 = document.getElementById("td1")
    const td2 = document.getElementById("td2")

    td1.innerHTML += ` <td> ${id} </td><br/>`
    td2.innerHTML += `<td>${timeString}</td><br/>`
}
