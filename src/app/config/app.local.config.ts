export class AppLocalConfig {

    getConfig() {
        return {
            'node-backend': {
                employeeURL: '/api/',
                saveEmployee: '/api/employee',
                deleteEmployee: '/api/employee/remove'
            }
        };
    }
}
