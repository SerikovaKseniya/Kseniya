class Patient {
    constructor(s, n, sn, sex, dob, stv) {
        this.S = s;
        this.N = n;
        this.SN = sn;
        this.Sex = sex;
        this.DoB = new Date(dob);
        this.StV = stv;
    }
    setbyid() {
        document.getElementById("S").textContent = this.S
        document.getElementById("N").textContent = this.N
        document.getElementById("SN").textContent = this.SN
        document.getElementById("Sex").textContent = this.Sex
        document.getElementById("DoB").textContent = this.DoB.getFullYear()
        document.getElementById("StV").textContent = this.StV
    }
}
let Серикова = new Patient("Серикова",  "Ксения", "Васильевна", 'Ж', new Date(2002, 5, 09), "Исполнено")
let Сталин = new Patient("Сталин", "Иосиф", "Виссарионович", 'M', new Date(1879, 12, 21), "Медотвод")
let Ленин = new Patient("Ленин", "Владимир", "Ильич", 'M', new Date(1870, 3, 10), "Назначено")
Серикова.setbyid();
Сталин.setbyid();
Ленин.setbyid();