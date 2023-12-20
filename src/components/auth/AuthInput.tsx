interface AuthInputprops{
label: string
value: any
type?: 'text' | 'email' |'password'
doesNotRender?: boolean
required?: boolean
onChange: (newValue: any) => void
}

export default function AuthInput(props: AuthInputprops){
    return props.doesNotRender ? null : (
        <div className="flex flex-col mt-4">
            <label>{props.label}</label>
            <input
                type={props.type ?? 'text'}
                value={props.value}
                onChange={e => props.onChange?.(e.target.value)}
                required={props.required}
                className={`
                    px-4 py-3 rounded-lg bg-gray-200 mt-2
                    border focus:border-blue-500
                    focus:outline-none focus:bg-white
                `}
            />
        </div>
    )
}