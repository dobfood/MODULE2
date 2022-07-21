import {Student} from "./Student";

export class StudentManager {
    private static student: Student[] = []

    constructor() {
    }

    getAllStudent(): Student[] {
        return StudentManager.student
    }

    addNewStudent(student: Student): void {
        StudentManager.student.push(student)
    }

    updateStudent(value: number, student: Student): void {
        StudentManager.student[value] = student
    }

    deleteStudent(value: number): void {
        StudentManager.student.splice(value, 1)
    }

    findsStudent(fulllname: string) {
        let index = -1
        let flag: number = 0
        StudentManager.student.forEach((value, index) => {
            if (value.fullname == fulllname) {
                console.table(StudentManager.student[index]);
                flag++
            }
        })
        if (index == -1) {
            return 'deo co'
        }
    }

    findsStudentemail(email: string) {
        for (let i = 0; i < StudentManager.student.length; i++) {
            if (StudentManager.student[i].email == email) {
                console.log(`${StudentManager.student[i].email}`)

            } else {
                console.log('deo co')
            }
        }
    }

    findsStudentgroup(group: string) {
        for (let i = 0; i < StudentManager.student.length; i++) {
            if (StudentManager.student[i].group == group) {
                console.log(`${StudentManager.student[i].group}`)
            } else {
                console.log('deo co')
            }
        }
    }

    findsStudentage(age: number) {
        for (let i = 0; i < StudentManager.student.length; i++) {
            if (StudentManager.student[i].age === age) {
                console.log(`${StudentManager.student[i].age}`)
            } else {
                console.log('deo co')
            }
        }
    }

    sortAge() {
        let n = StudentManager.student.length
        for (let i = 1; i < n; i++) {
            let key = StudentManager.student[i].age
            let j = i - 1
            while (j >= 0 && StudentManager.student[j].age > key) {
                StudentManager.student[j + 1] = StudentManager.student[j];
                j = j - 1;
            }
            StudentManager.student[j + 1].age = key
            console.log(StudentManager.student[j].age)
        }
        return StudentManager.student
    }
}