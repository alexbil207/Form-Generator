import { useState, useEffect } from 'react'
import { useDebounce } from './useDebounce'

type ValueTypes = string | number | undefined
type TuseForm = () => boolean

export const useForm = (validator: TuseForm) => {
    const [value, setValue] = useState<ValueTypes>()
    const [isError, setError] = useState<boolean>()
    const debouncedValue = useDebounce<ValueTypes>(value, 500)

    useEffect(() => {
        setError(validator())
    }, [debouncedValue])


    return [
        isError,
        value,
        function (ev: React.ChangeEvent<HTMLInputElement>) {
            let value = ev.target.name;
            switch (ev.target.type) {
                case 'number':
                    value = +ev.target.value;
                    break;
                default:
                    value = ev.target.value;
            }
            setValue(value);
        },
        setValue
    ]
}