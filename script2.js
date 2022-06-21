function mensaje() {
      Swal.fire({
        icon: 'success',
        title: 'Los datos se enviaron correctamente!',
      })
    formulario.reset()
    return false
}