class Company {
    constructor() {
        this.departments = {};
    };

    addEmployee(username, salary, position, department) { 
        
        if (invalidCheck(username) && invalidCheck(salary) && invalidCheck(position) && invalidCheck(department)) {
            if (!this.departments.hasOwnProperty(department)) {
                this.departments[department] = [];              
            }
            
            let newEmployee = {
                username: username, 
                salary: Number(salary),
                position: position
            }
            this.departments[department].push(newEmployee);
            return `New employee is hired. Name: ${username}. Position: ${position}`
        };
        
        function invalidCheck(input) {
            if (input === '' || input === undefined || input === null) {
                throw new Error('Invalid input!');
            } else if (input = Number && input < 0) {
                throw new Error('Invalid input!');
            } else {
                return true; 
            }
        }
    }

    bestDepartment() {
        let department = '';
        let maxSalary = 0;

        Object.entries(this.departments).forEach(([key, value]) => {
            let salary = 0;
            value.forEach(e => {
                salary += e.salary;
            });
            salary = salary / value.length; 
            if (salary > maxSalary) {
                department = key;
                maxSalary = salary;
            }
        });

        if (department != '') {
            let result = `Best Department is: ${department}\nAverage salary: ${maxSalary.toFixed(2)}\n`;
            Object.values(this.departments[department])
                                .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username))
                                .forEach(e => {
                                    let em = `${e.username} ${e.salary} ${e.position}\n`;
                                    result += em;
                                    });
            return result.trim();
        }
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
