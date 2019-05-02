import React from 'react'





const UploadField = ({input, label, placeholder, type, id, meta: {error, touched}}) => {
if(type === 'file') {
return (<div className="form-group">
<label htmlFor={id}>{label}</label>
<input className="form-control" id={id} type="file" value={this.files}/>
{touched && error && <div className="row"><div className="col my-2"><small className="alert alert-danger" role="alert">{error}</small></div></div>}
</div>
)
}else{
return (<div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input {...input} className="form-control" placeholder={placeholder} id={id} type={type}/>
        {touched && error && <div className="row"><div className="col my-2"><small className="alert alert-danger" role="alert">{error}</small></div></div>}
        </div>
        )
}
}



export default UploadField