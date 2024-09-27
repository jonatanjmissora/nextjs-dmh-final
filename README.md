
<h1>DIGITAL MONEY HOUSE</h1>
<img src="https://github.com/user-attachments/assets/9cf18e64-d889-4ede-a604-d653a9033be7" />
<h2>Tabla de contenido</h2>
<div>
    <ul>
        <li>
            <a href="#sprint-1-landing-login-register">Hecho en el SPRINT 1</a>
        </li>
        <li>
            <a href="#sprint-2-dashboard-inicio---perfil---tarjetas">Hecho en el SPRINT 2</a>
        </li>
        <li>
            <a href="#sprint-3-dashboard-actividad---cargar-dinero">Hecho en el SPRINT 3</a>
        </li>
        <li>
            <a href="#sprint-4-dashboard-pagar-servicios">Hecho en el SPRINT 4</a>
        </li>
        <li>
            <a href="#extras-loading-error">Extras</a>
        </li>
        <li>
            <a href="#dependencias">Dependencias</a>
        </li>
        <li>
            <a href="#corrección-a-la-devolución">Correcciones</a>
        </li>
    </ul>
</div>

<h2>Usuario de prueba</h2> 
    <h4>email:</h4><i>jonatanjmissora1@gmail.com</i>
    <h4>password:</h4><i>123qQ*</i>
    
<h2>SPRINT 1 (landing, login, register)</h2>
<div>
    <ul>
        <li>Crear Home page responsive. ✅</li>
        <li>Crear el UI del navbar. ✅<br/>
                Renderizado condicional, segun el pathname, y si el usuario se encuentra logueado. ✅</li>
        <li>Lógica de los Links del Nav. ✅</li>
        <li>Crear /login responsive:<br/>
            -    Controlar la validacion del form, usando React-hook-form y yup. ✅<br/>
            -    Contemplar todas las posibles respuestas del swagger. ✅<br/>
            Si el login es correcto:<br/>
             -    Crear las cookies con los datos del usuario logueado. ✅<br/>
             -    Redirigir al /dashboard. ✅</li>
        <li>Crear /register responsive:<br/>
            -    Controlar la validacion del form, usando React-hook-form y yup. ✅<br/>
            -    Contemplar todas las posibles respuestas del swagger. ✅<br/>
            -    Redirigir al /login si el registro es correcto. ✅</li>
        <li>Lógica del middleware para usuarios logueados/no-logueados. ✅</li>
    </ul>
</div>

<h2>SPRINT 2 (dashboard: Inicio - Perfil - Tarjetas)</h2>
<div>
    <h3>Inicio:</h3>
    <ul>
        <li>
            Layout con un DashboardMenu. ✅<br/>
            - Resaltado del menu segun pathname. ✅
        </li>
        <li>
            Contenido del dashboard/ ✅ 
        </li>
        <li>
            Card con los el monto disponible y links a tarjetas y perfil. ✅
        </li>
        <li>
            Acciones posibles de la cuenta. ✅<br/>
            - Links de Cargar dinero y Pago de servicios. ✅
        </li>
        <li>
            Searchbar para actividades. ✅
        </li>
        <li>
            Utilizamos el paquete "use-debounce". ✅
        </li>
        <li>
            Listado de actividades recientes y link a todas las actividades. ✅
        </li>
    </ul>
    <h3>Perfil:</h3>
        <ul>
            <li>
                Datos del usuario. ✅<br/>
                - Link al formulario que me permite editar algunos datos del usuario (email, nombre, apellido y teléfono). ✅
            </li>
            <li>
                Link a los medios de pago (tarjetas). ✅
            </li>
            <li>
                Datos de la cuenta CVU y alias. ✅<br/>
                - Boton para copiar dichos datos en el portapapeles ✅
            </li>
        </ul>
    <h3>Tarjetas:</h3>
        <ul>
            <li>
                Link al formulario para agregar una nueva tajeta. ✅<br/>
                - Utilizamos el paquete "react-credit-cards-2". ✅
            </li>
            <li>
                Listado de las tajetas asociadas a la cuenta ✅
            </li>
            <li>
                Posibilidad de eliminar una tajeta ✅
            </li>
        </ul>
   </div> 

<h2>SPRINT 3 (dashboard: Actividad - Cargar dinero)</h2>
<div>
    <h3>Actividad:</h3>
        <ul>
            <li>
                Searchbar para filtrar actividades:<br/>
                - Utilizamos el paquete "use-debounce". ✅<br/>
                - Utilizamos un searchParams "search". ✅
            </li>
            <li>
                Menu de filtro:<br/>
                - Utilizamos: "<"details">". ✅<br/>
                - Radio para visualizar el filtro actual. ✅<br/>
                - Boton para borrar el filtro actual. ✅<br/>
                - Utilizamos un searchParams "filter". ✅
            </li>
            <li>
                Listado de actividades:<br/>
                - Visualizamos sólo 10 actividades por página. ✅<br/>
                - Listado segun los searcParams: search - filter y page. ✅<br/>
                - Paginacion en el caso que sean mas de 10 actividades. Segun el "search" y "filter". ✅<br/>
                - Las actividades estan ordenadas de la fecha actual a las mas antiguas. ✅<br/>
                - Se pueden ver mas datos de la actividad clickeada. ✅
            </li>
        </ul>
</div>
<div>
    <h3>Cargar dinero:</h3>
        <ul>
            <li>
                Por transferencia bancaria. ✅<br/>
                Me permite seleccionar si realizo la transferencia por CVU o alias. ✅<br/>
                Utilizo un searchParamas "account" para almacenar la opcion elegida. ✅
            </li>
            <li>
                Por tarjetas asociadas a la cuenta previamente. cargadas. ✅<br/>
                Me permite seleccionar la tarjeta con la que se realizará la transferencia. ✅<br/>
                Utilizo un searchParamas "cardnum" para almacenar la opcion elegida. ✅
            </li>
            <li>
                Formulario para cargar una cantidad positiva a transferir, con su propia validación. ✅
            </li>
            <li>
                Utilizo un searchParamas "amount" para almacenar el monto a transferir. ✅
            </li>
            <li>
                Por último, una vez recolectados los datos en el searchParams, voy al checkout para realizar la transferencia. ✅
            </li>
            <li>
                Posibilidad de modificar el valor a transferir. ✅
            </li>
            <li>
                Visualizacion de pagina de éxito de la operación, o error de la misma. ✅
            </li>
        </ul>
</div>

<h2>SPRINT 4 (dashboard: Pagar servicios)</h2>
<div>
    <h3>Pagar servicios:</h3>
    <ul>
        <li>
            Searchbar para filtrar o buscar una cadena dentro de los nombres de los servicios asociados a la cuenta. ✅
        </li>
        <li>
            Listado de todos los servicios. ✅
        </li>
        <li>
            Una vez seleccionado el servicio, nos lleva al formulario para cargar el número de factura. ✅<br/>
            - Como no existe éste dato en swagger, hacemos un hardcode del número de boleta. Cualquier número distinto de "99999999999" nos arrojará el mensaje de que no existe la boleta asociada al servicio. ✅
        </li>
        <li>
            Podemos ver más detalles del pago, o podemos elegir el medio de pago (tarjeta) y realizar la operación. ✅<br/>
            - Si el saldo de la cuenta lo permite, se realizará el pago, mostrando su respectiva pantalla de éxito. De lo contrario mostrará pantalla de error en el pago. ✅
        </li>
    </ul>
</div>

<h2>EXTRAS (loading, error)</h2>
<div>
    <ul>
        <li>
            Se contemplaron páginas de loading y Suspense para ciertas partes de la aplicación, como también el uso de spinner en los botones submit de algunos formularios, que debían interactuar con el swagger. ✅
        </li>
        <li>
            Se contemplaron errores de conexión, de servidor, de base de datos caida, asi como también la manipulación intencional en la dirección de los endpoints no porporcionados por la app. Proporcionando un mensaje de error y link con redirección. ✅
        </li>
    </ul>
</div>

<h2>DEPENDENCIAS</h2>
<div>
    {<br/>
    "@hookform/resolvers": "^3.9.0",<br/>
    "jwt-decode": "^4.0.0",<br/>
    "next": "14.2.4",<br/>
    "react": "^18",<br/>
    "react-credit-cards-2": "^1.0.2",<br/>
    "react-dom": "^18",<br/>
    "react-hook-form": "^7.52.1",<br/>
    "sonner": "^1.5.0",<br/>
    "use-debounce": "^10.0.2",<br/>
    "yup": "^1.4.0"<br/>
  }
</div>

<h2>CORRECCIÓN a la DEVOLUCIÓN</h2>
<div>
    <h3>Sprint I</h3>
    <h4>A) Épica: Inicio, registro y acceso</h4>
        <ul>
            <li>
                Tener posibilidad de usar el producto desde desktop, tablet y Mobile. ✅
            </li>
        </ul>
        
</div>

<div>
    <h3>Sprint II</h3>
    <h4>A) Épica: Dashboard</h4>
        <ul>
            <li>
                Dos centavos de detalle en el importe expresados en ARS. ✅
            </li>
            <li>
                Al hacer clic en el nombre, debe redirigir a la pantalla de Dashboard. ✅
            </li>
            <li>
                Deben mostrarse los últimos 10 resultados, mostrando los ingresos y egresos de dinero ordenados por fecha por defecto. ✅
            </li>
            <li>
                Tiene que tener un campo para ingresar la búsqueda que al presionar “Enter”, en un futuro, redirija a la sección de “Mi actividad” con el filtro aplicado. ✅
            </li>
        </ul>
    </div>
        
<div>
    <h4>B) Épica: Mi perfil</h4>
        <ul>
            <li>
                Debemos poder editar los datos personales desde la misma pantalla. Luego, al presionar “Guardar”, deben registrarse en el sistema los nuevos datos. ✅
            </li>
            <li>
                Idem con el alias. ✅
            </li>
        </ul>
</div>

<div>
    <h4>C) Épica: Gestión de medios de pago</h4>
        <ul>
            <li>
                Deben poder darse de alta un máximo de 10 tarjetas. En caso de llegar al límite, mostrar un mensaje indicando que se llegó al mismo. ✅
            </li>
        </ul>
</div>

<div>
    <h3>Observaciones:</h3>
        <ul>
            <li>
                En el formulario de tarjetas puedo colocar mas de 16 numeros. (solucionado, con un input controlado) ✅
            </li>
            <li>
                Para actualizar los datos de la persona tenemos nombre 2 veces ✅
            </li>
            <li>
                En actualizar perfil, no actualiza los datos del usuario en cuanto a nombre y apellido ✅
            </li>
            <li>
                Agregar una validacion para el tema de la longuitud de caracteres en el input de boleta de servicio (solucionado, con un input controlado) ✅
            </li>
            <li>
                Sacar todos los console.log de la aplicacion. ✅
            </li>
            <li>
                Revisar el tema de paddings en la lista de actividades caundo hay menos de 10. ✅
            </li>
            <li>
                En la pagina de actividades el requerimiento dice 10 movimientos por pagina. ✅
            </li>
            <li>
                Ajustes en Mobile. ✅
            </li>
            <li>
                Ver paginacion en Movile. ❌(pendiente)
            </li>
            <li>
                No incluye los dos centavos en operaciones ni saldo. ✅
            </li>
            <li>
                Hay un bug que tengo que actualizar la pagina para poder ver el saldo actualizado ❌(pendiente)
            </li>
        </ul>
</div>
