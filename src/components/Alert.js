import React from "react";
import toastr from 'toastr'

export default function Alert(props) {
    const camelize=(txt)=>{
        const lower = txt.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }

    const onClick1 = () => {
      // var count = count || 1
      // toastr.options = {
      //   positionClass : 'toast-top-center',
      //   hideDuration: 300,
      //   timeOut: 60000
      // }
      toastr.options = {
        "closeButton": true,
        "debug": false,
        "progressBar": true,
        "preventDuplicates": false,
        "positionClass": "toast-top-center",
        "onclick": null,
        "showDuration": "400",
        "hideDuration": "1000",
        "timeOut": "7000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }
      toastr.clear()
      setTimeout(() => toastr.success(props.alert.message), 300)
    }

  return (
    props.alert && (
      <>
      {/* <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{camelize(props.alert.type)}</strong> {props.alert.message}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div> */}
      <div>
        <span {...onClick1()}></span>
      </div>
       {/* toastr.success('Have fun storming the castle!', 'Miracle Max Says') */}
      </>
    )
  );
}
