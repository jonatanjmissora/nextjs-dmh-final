# About:
Virtual wallet.  
Load money via transfer or credit card.  
Make payments for services and keep a list of all your transactions.  
Manage your credit cards.  

****************************
![alt text](/public/nextjs.svg "nextjs image") - ![alt text](/public/typescript.svg "typescript image") - ![alt text](/public/tailwindcss.svg "tailwind image")

- react hook form + yup
- react credit cards 2
- use debounce
- sonner
- Swagger

****************************

![alt text](/public/preview-desk.webp "preview image repository")
![alt text](/public/preview-mobil.webp "preview image repository")

Login
======

```javascript
    export const LoginForm = () => {
        const loginPasswordMethods = useForm<PasswordType>({
            resolver: yupResolver(passwordSchema),
        })
        const {
            handleSubmit,
            formState: { errors, isSubmitting },
            setFocus,
        } = loginPasswordMethods

        const resp = await login(loginData)
        if (resp.token) {
            router.push("/dashboard")
            router.refresh();
        }
        else throw new Error(resp.error)
    }

```

****************************
services
=========

```javascript
    export const login = async ({ email, password }: LoginTypes) => {
        return httpPost("api/auth/login", { email, password })
    }

    export const httpPost = async (endpoint: string, data?: object | null, token?: string) => {
        const res = await fetch(`http://localhost:3000/${endpoint}`, {
            method: 'POST',
            headers: !token
            ? { 'Content-Type': 'application/json' }
            : {
                'Content-Type': 'application/json',
                "Authorization": token
            },
            body: JSON.stringify(data ?? {})
        });

        return res.json();
    }
```

****************************
api/login/route.ts
===================

```javascript
    export async function POST(request: NextRequest) {
        try {
            const { email, password } = await request.json();

            const loginResp = await fetch("https://digitalmoney.digitalhouse.com/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
            })

            const loginData = await loginResp.json()
            if (loginData.error) {
            throw new Error(loginData.error)
            }
            const { token } = loginData
            const { username: userId } = jwtDecode<DecodeTokenTypes>(token)

            const userDataPromise: Promise<UserDataTypes> = await getUserData(userId, token,)
            const accountDataPromise: Promise<AccountDataTypes> = await getAccountData(token)
            const [userData, accountData] = await Promise.all([userDataPromise, accountDataPromise])

            const userName = `${userData.firstname} ${userData.lastname}`
            const accountId = accountData.id.toString()

            cookies().set('token', token, cookieOptions)
            cookies().set('userid', userId, cookieOptions)
            cookies().set('username', userName, cookieOptions)
            cookies().set('accountid', accountId, cookieOptions)

            return new NextResponse(JSON.stringify(loginData), {
            status: 200,
            })

        } catch (e) {
            if (e instanceof Error) {
            return new NextResponse(JSON.stringify({
                error: e.message
            }), { status: 500, })
            }
        }
    }
```
***************************************
>Utilizo el form para obtener los datos<br />
>Hago un POST al endpoint "api/auth/login" que me dirige al backend<br />
>El backend me arroja un error o un token<br />
>Si hay token, decodifico para obtener datos del backend<br />
>Almaceno en cookies esos datos para usarlos nuevamente.

****************************
middelware
===========

```javascript
    import { NextRequest, NextResponse } from "next/server";

    export async function middleware(request: NextRequest) {

    const token = request.cookies.get('token')?.value ?? ''

    if (!token)
        return NextResponse.redirect(new URL('/', request.url));

    return NextResponse.next()
    }

    export const config = {
    matcher: ['/dashboard/:path*']
    }
```

****************************
new card form
==============

```javascript
    export default function CardNewForm() {

        const newCardFormMethods = useForm<CardFormDataType>({
            resolver: yupResolver(newCardSchema),
        });

        const {
            handleSubmit,
            setFocus,
            control,
            formState: { errors, isSubmitting },
        } = newCardFormMethods

        const [serverError, setServerError] = useState<string>("")
        const [actualFocus, setActualFocus] = useState<string>("number")

        useEffect(() => {
            setFocus("number")
        }, [setFocus])

        const onSubmit: SubmitHandler<CardFormDataType> = async (data) => {
            const newCard = { ... }
            try {
                setServerError("")
                const { data, error }: PostCardResponse = await postCard(accountId, newCard, token)
                if (error) throw new Error(error)

                toast.success("Tarjeta adherida correctamente")
                router.push(`/dashboard/accounts/${accountId}/cards`)
                router.refresh();

            } catch (error) {
                if (error instanceof Error) {
                   ...
                }
            }
        }

        const [ cardLibNumber, cardLibName, cardLibExpiry, cardLibCvc, ] = useWatch({
            control, name: ["number", "name", "expiry", "cvc"]
        })

        const emptyInputs = checkEmptyInputs(cardLibNumber, cardLibName, cardLibExpiry, cardLibCvc)

        return (
            <>
                <CardLib
                    number={cardLibNumber && Number(cardLibNumber) || NaN}
                    name={cardLibName && cardLibName.substring(0, 17) || ""}
                    expiry={cardLibExpiry && (cardLibExpiry.substring(0, 4)) || ""}
                    cvc={cardLibCvc && Number(cardLibCvc.substring(0, 3)) || NaN}
                    focus={actualFocus}
                />
                <form onSubmit={handleSubmit(onSubmit)}> 
                    ...
                </form>
            </>
        )

    }

```

****************************
debounce
=========

```javascript
    export default function SearchBar() {

        return (
            <div className="card-shadow w-full relative flex items-center">
                <SVGSearch className={"size-6 absolute left-[5%] xl:size-5 xl:left-[2.5%]"} />
                <InputSearch className={`w-full pl-16 sm:pl-20 sm:text-3xl sm:py-8 xl:text-xl xl:pl-16 xl:py-5 ${className}`} placeholder={placeholder} accountId={accountId} />
            </div>
        )

    }

    export default function InputSearch() {

        const handleChange = useDebouncedCallback((search: string) => {
            const params = new URLSearchParams(searchParams);

            if (search !== "") {
            params.set('search', search);
            params.set("page", "1")
            params.delete('filter');
            } else {
            params.delete('search');
            }
            router.replace(`/dashboard/accounts/${accountId}/${actualPathname}?${params.toString()}`);
        }, 300)

        return (
            <input 
                onChange={(e) => handleChange(e.target.value)}
                defaultValue={searchParams.get('search')?.toString()}
                ...
            />
        )
    }

```

<picture className="rounded-full h-12 w-12">
    <img src="/public/avatar.webp" alt="avatar image"/>
</picture>
![alt text](/public/avatar.webp, "My avatar image")

This repository was built by [Jonatan Missora](https://github.com/jonatanjmissora).