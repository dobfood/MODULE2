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

    findsStudent(fullname: string) {
        let index = -1
        for (let i = 0; i < StudentManager.student.length; i++) {
            if (StudentManager.student[i].fullname === fullname) {
                index = i
                break;
            }
        }
        if(index==-1){
            return 'deo co'
        }
        else {
           return (` + Ten : ${StudentManager.student[index].fullname}\n + Email : ${StudentManager.student[index].email} \n + Group : ${StudentManager.student[index].group}`)
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
}