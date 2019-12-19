 class Student {
    constructor(name, id, gpa, course) {
        this.name = name;
        this.id = id;
        this.gpa = gpa;
        this.course = course;

    }
    toString() {
        return this.name;
    }
}
class Course {
    constructor(name, time, date, rooms) {
        this.name = name;
        this.time = time;
        this.date = date;
        this.rooms = rooms;

    }
    toString() {
        return this.name;
    }
}
class Database {
    constructor() {
        this.students = new Map();
        this.courses = new Map();
       
    }
    report(msg, id, list) {
        out.innerHTML += "<br>"; msg += " ";
        out.appendChild(document.createTextNode(msg));
        let n1;
        if (id) {
            n1 = document.createElement("span");
            n1.appendChild(document.createTextNode(id));
            n1.classList.add("link");
            out.appendChild(n1); msg += id;
            //n1.addEventListener("click", doClick);
        }
        if (list) {
            let n2 = document.createElement("span");
            n2.appendChild(document.createTextNode(""));
            n2.innerHTML += list.join("<br>");
            n2.classList.add("course");
            if (n1) n1.appendChild(n2);
        }
        console.log(msg);
    }

    doClick(evt) {
        //console.log(evt);
        let t = evt.target;
        let s = t.innerText;
        if (/^\d+$/.test(s)) showStd(s); //s contains digits
        else if (t = t.firstElementChild) {
            t.style.visibility = "";
            let hide = function () {
                t.style.visibility = "hidden";
            };
            setTimeout(hide, 5000);
        }
    }
    findID(id) {
        return this.students.get(id);
    }
    showStd(id) {
        out.innerText = "";
        let t = id + " ";
        let std = this.findID(id);
        if (!std) {
            return "Not Found";
        }
        t += std.name + " " + std.gpa;
        // report(t, std.courses.length + " courses", std.list);
    }
    showStdButton() {
        out.innerText = "";
        out.innerText = this.showStd(document.getElementById('std_id').value);

    }
    studnetListGiveCourse(code) {
        code = code.toUpperCase();
        let a = [];
        for (let std of this.students.values)
            if (std.courses.includes(code))
                a.push(std.id + " " + std.name);
        if (a.length > 0)
            report(code + ": ", a.length + " students", a);
        else return "No students in ";
    }
    studnetListGiveCourseButton() {
        out.innerText = "";
        out.innerText = studnetListGiveCourse(document.getElementById('crs_id').value);
    }

    randomStd() {
        out.innerText = "";
      //  let keys = Array.from(this.students.keys());
        let i = Math.trunc(this.students.size * Math.random());
        let v = Array.from(this.students.values());
       // let std = this.students.get(keys[i]);
        console.log(v[i].name);
        this.report();
      //  return std;
    }

    aboveGpa(gpa) {
        let counter = 0;
        let values = Array.from(this.students.values());
        for (let i = 0; i < values.length; i++) {
            if (values[i].gpa < gpa) {
                counter = counter + 1;
            }
        }
        return counter;
        console.log(counter);
    }

    aboveGpaButton() {
        out.innerText = "";
        out.innerText = this.aboveGpa(document.getElementById('gpa_id').value)
    }

    coursesGivenStudent(std) {
        let a = [];
        for (let crs of this.courses.keys) {
            if (crs.courses.includes(std))
                a.push();
        }
        if (a.length > 0) {
            // report(std + ": ", a.length + " taken courses", a);
        } else { return "No students " };

    }
    coursesGivenStudentButton() {
        out.innerText = "";
        out.innerText = this.coursesGivenStudent(document.getElementById('std_id').value);
    }
    examSchuduleGivenStudent(std) {
        for (let c of this.courses.values) {

        }
    }

    examSchuduleGivenStudentButton() {
        out.innerText = "";
        out.innerText = this.examSchuduleGivenStudent(document.getElementById('std_id').value);
    }

    courseListGivenExamRoom(examRoom) {
        let courseList = [];
        for (let crs of this.courses.values) {
            if (crs.rooms.includes(examRoom)) {
                courseList.push(crs.name);
            }
        }
        return courseList;

    }

    courseListGivenExamRoomButton() {
        out.innerText = "";
        out.innerText = this.courseListGivenExamRoom(document.getElementById('examRoom_id').value);
    }

    totalCourseGivenExamRoom(examRoom) {
        let counter = 0;
        for (let crs of data.courses.values) {
            if (crs.rooms.includes(examRoom)) {
                counter++;
            }
        }
        return counter;
    }

    totalCourseGivenExamRoomBUtton() {
        out.innerText = "";
        out.innerText =this.totalCourseGivenExamRoom(document.getElementById('crs_id').value)
    }

}

let data=new Database();
readDataCourses("Courses.txt");
readDataStudents("Students.txt");

function readDataStudents(file) {
    let url = "https://maeyler.github.io/JS/data/";
    console.log("readData " + file);
    fetch(url + file)
        .then(r => r.text(), data.report)
        .then(this.addStudents, data.report);

}

function addStudents(txt) {
    let msg = txt.length + " chars, ";
    let a = txt.split("\n");
    msg += a.length + " lines, ";
    for (let s of a) {
        let std = parseStudent(s);
       data.students.set(std.id, std);
        //  keys.push(std.id); vals.push(std);
    }

}

function readDataCourses(file) {
    let url = "https://maeyler.github.io/JS/data/";
    console.log("readData " + file);
    fetch(url + file)
        .then(r => r.text(), data.report)
        .then(this.addCourses, data.report);

}

function addCourses(txt) {
    let msg = txt.length + " chars, ";
    let a = txt.split("\n");
    msg += a.length + " lines, ";
    for (let s of a) {
        let crs = this.parseCourse(s);
        data.courses.set(crs.name, crs);
    }
    //  report(msg + this.courses.size + " courses");
}
function parseCourse(line) {
    let [name, time, date, ...rooms] = line.split("\t");

    return { name, time, date, rooms };
}
function parseStudent(line) {
    let [id, name, gpa, ...courses] = line.split("\t");
    return { id, name, gpa, courses };
}


