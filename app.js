let tododata = document.getElementById("todo_data");

let arr = [];
let update = false;
let vid = null;

const removeData = (i) => {
    arr.splice(i, 1);
    localStorage.setItem("todo", JSON.stringify(arr));
    display();
}

const editData = (i) => {
    document.getElementById("data").value = arr[i];
    update = true;
    vid = i;
}

const changeData = () => {
    let data = document.getElementById("data").value;
    arr[vid] = data;
    update = false, vid = null;
    data = document.getElementById("data").value = '';
    localStorage.setItem("todo", JSON.stringify(arr));
    display();
    event.preventDefault();
}



const getData = () => {
    let data = JSON.parse(localStorage.getItem("todo"));
    console.log(data);

    if (data != null) {
        arr = data;
    }
}

// const handleShort = () => {

//     let data = JSON.parse(localStorage.getItem("todo"));
//     // console.log(data);
//     console.log("handle sortttt");

//     let short_type = document.getElementById("short_data").value;
//     if (short_type === "A-Z") {
//         let ans = data.sort();
//         console.log(ans);
//         arr = ans;
//     } else if (short_type === "Z-A") {
//         let ans = data.sort();
//         let ans1 = ans.reverse();
//         console.log(ans1);
//         arr = ans1;
//         localStorage.setItem("todo", JSON.stringify(arr));
//         display();
//         event.preventDefault();
//     }
// }


    const display = () => {
        let disp = '<tr><th>Todo Data</th> <th>Remove</th> <th>Edit</th></tr>';
        arr.map((v, i) => {
            disp += '<tr>';
            disp += '<td id = "max">' + v;
            disp += '<td onclick = "removeData(' + i + ')"> <i class="fa-sharp fa-solid fa-trash" style="color: #da3910;"></i></td>'
            disp += '<td onclick = "editData(' + i + ')"> <i class="fa-sharp fa-solid fa-pen-to-square" style="color: #23ec09;"></i></td>'
            disp += '</td>';
            disp += '</tr>';
        });

        document.getElementById("list_data").innerHTML = disp;


    }

    const handleSubmit = () => {
        let data = document.getElementById("data").value;
        arr.push(data);

        console.log(arr);

        data = document.getElementById("data").value = '';
        localStorage.setItem("todo", JSON.stringify(arr));
        display();
        event.preventDefault();
    }

    const handleDisc = () => {
        if (update) {
            changeData();
            // console.log("change data");
        } else {
            handleSubmit();
            // console.log("add submit");
        }
    }

    tododata.addEventListener("submit", handleDisc);
    window.onload = getData();
    // window.onload = handleShort();