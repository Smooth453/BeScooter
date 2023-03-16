const TextareaField = (props) => {
    const { handleChange, label, name, value } = props;
    return (
      <div>
        <label className="text-sm leading-7 text-gray-900" htmlFor={name}>{label}</label>
        <textarea onChange={handleChange} name={name} rows="4" className="md:h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" value={value}></textarea>
      </div>
    )
  }
  
  export default TextareaField