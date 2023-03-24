const InputField = (props) => {
    const { handleChange, label, name, type, value, placeholder } = props;
    return (
      <div className="relative mb-4">
        <label className="text-sm leading-7 text-gray-900" htmlFor={name}>{label}</label>
        <input className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" type={type} onChange={handleChange} placeholder={placeholder} value={value} name={name} required  />
      </div>
    )
  }
  
  export default InputField
  