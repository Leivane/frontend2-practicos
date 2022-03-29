window.onload = () => {
    const form = document.forms.inscripcion;
    const btnEnviar = document.querySelector("button");
    const nombre = form.nombre;
    const contrasenia = form.pass;
    const telefono = form.tel;
    const hobbies = Array.from(form.hobbies);
    const nacionalidades = Array.from(form.nacionalidad);
    const persona = new Persona();

    function validar(campo, validacion, setter) {
        if (validacion(campo.value)) {
            persona[setter](normalizarString(campo.value))
            campo.classList.remove("error");
            btnEnviar.disabled = false;
        } else {
            campo.classList.add("error");
            btnEnviar.disabled = true;
        }
    }

    nombre.addEventListener("keyup", () => {
        validar(nombre, validarNombre, "setNombreCompleto");
    });

    contrasenia.addEventListener("keyup", () => {
        validar(contrasenia, validarContrasenia, "setContrasenia");
    });

    telefono.addEventListener("keyup", () => {
        validar(telefono, validarTelefono, "setTelefono");
    });

    form.addEventListener("submit", event => {
        event.preventDefault();
        let sePudoAgregarHobbies = persona.agregarHobbies(hobbies);
        let sePudoAgregarNacionalidad = persona.agregarNacionalidad(nacionalidades);
        if (!sePudoAgregarHobbies) {
            alert("No puede seleccionar más de 4 hobbies o la combinacion seleccionada no es válida." +
                "\nRecuerde que no se puede combinar:" +
                "\n    - Videojuegos con cocina" +
                "\n    - Guitarra con lectura" +
                "\n    - Netflix con tejer");
        } else if (!sePudoAgregarNacionalidad) {
            alert("Debe seleccionar una nacionalidad");
        } else if (persona.getNacionalidad() === "argentina") {
            alert("Lo sentimos, aún no estamos reclutando magos en Argentina, pero pronto llegaremos");
        } else {
            persona.mostrarDatos();
        }
    });
};

function normalizarString(str) {
    return str.trim().toLowerCase();
}

function validarNombre(n) {
    const regex = /^(?=.{4,150}$)[a-z]{2,} [a-z]{2,}/g
    const nombre = normalizarString(n);
    return regex.test(nombre);
    // Sin regex
    // const partesNombre = nombre.split(" ");
    // let esValido = partesNombre.length >= 2 && nombre.length < 150;
    // if (esValido) {
    //     partesNombre.forEach(parte => {
    //         esValido = esValido && (parte.length >= 2);
    //     });
    // }
}

function validarContrasenia(c) {
    const regex = /^(?=.*?[!@#$%^&*+-_])[a-zA-Z0-9!@#$%^&*-_]{10,15}$/g;
    const contrasenia = normalizarString(c);
    return regex.test(contrasenia);
}

function validarTelefono(t) {
    const regex = /^[0-9]{3,3} [0-9]{3,3} [0-9]{3,3}$/i;
    const telefono = normalizarString(t);
    return regex.test(telefono);
}