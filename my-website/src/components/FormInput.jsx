export default function FormInput({
  classname,
  type,
  autocomplete,
  placeholder,
  required,
  id,
}) {
  return (
    <input
      type={type}
      className={classname}
      autoComplete={autocomplete}
      placeholder={placeholder}
      required={required}
      id={id}
    />
  );
}
