![alt text](/public/preview.webp "preview image repository")
# Info:
Billetera virtual ficticia. 
      
# Utilizamos:
-  autorizacion.
-  estado de cuenta.
-  editar perfil.
-  pago de actividades.
-  carga de dinero.
-  cargar tarjetas.
-  backend: algo con z.
-  React Hook Form + yup.

****************************
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
api/login/route.ts
===================

```javascript

```

![alt text](https://avatars.githubusercontent.com/u/68980231?s=400&u=47296af9dbc2dba8be2e39a106545ddad55f98c7&v=4 "My avatar image")

This repository was built by [Jonatan Missora](https://github.com/jonatanjmissora).