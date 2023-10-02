(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, toDelete: false },
        { id: 2, toDelete: false },
        { id: 3, toDelete: true },
        { id: 4, toDelete: false },
        { id: 5, toDelete: false },
        { id: 7, toDelete: true },
    ];

    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map(fileToEvaluate => fileToEvaluate.toDelete);

    // Malos nombres
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea

    // día de hoy - today
    const creationDay = new Date();

    // días transcurridos - elapsed time in days
    const elapsedTimeInDays: number = 23;

    // número de archivos en un directorio - number of files in directory
    const numberOfFilesInDirectory = 33;

    // primer nombre - first name
    const name = 'Fernando';

    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const elapsedDaysSinceLastModification = 12;

    // cantidad máxima de clases por estudiante - max classes per student
    const maxAmountOfClassesPerStudent = 6;


})();
