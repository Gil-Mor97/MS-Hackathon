import React from "react";
import { Card, Typography } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import "./games.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

export default function Games() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <h2>משחקים</h2>
      <form className="input">
        <Stack spacing={2} sx={{ width: 600 }}>
          <Autocomplete
            sx={{ margin: "0 auto", width: 300 }}
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={expertsList.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="חיפוש"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
          />
          {/* <IconButton aria-label="search" size="small">
            <SearchIcon fontSize="medium" />
          </IconButton> */}
        </Stack>
      </form>
      <Card onClick={handleOpen} sx={{ maxWidth: 300, margin: "20px auto" }}>
        <CardMedia
          sx={{ height: 250 }}
          image="https://www.shutterstock.com/image-vector/hands-position-indicate-timeout-sign-260nw-1285033471.jpg"
          title="Time-Out"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            פסק זמן
          </Typography>
          <Typography variant="body2" color="text.secondary">
            אפליקצית למידה לשליטה בכעס
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">קישור</Button>
        </CardActions>
      </Card>

      <Card onClick={handleOpen} sx={{ maxWidth: 300, margin: "20px auto" }}>
        <CardMedia
          sx={{ height: 250 }}
          image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxMTEhYTFBQWFxYXFhYcGBcZGB8fGhckGhgXGRwcGRcZHyoiHCInHSAYIzQjJysuMTExGCE2OzYwOiowMS4BCwsLDw4PHRERHTgoISgwOjAxODUzMjMuMDAwMDAwMDAwMDAwMjAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDAyMP/AABEIAMcA/QMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABQYHBAMBAgj/xABSEAACAQMCAwQGBAcJDwQDAAABAgMABBEFEgYhMQcTQVEiYXGBkaEUMlKxM0JygpLB0SMkNENTVGJzsxUXJTVjdJOUorLC0tPh8Ahko/EWRIP/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAKBEAAwACAgIBBAEFAQAAAAAAAAECAxESIQQxQRMiUWEFFTJxobEU/9oADAMBAAIRAxEAPwDZaUpQClKUApSlAKUpQHwUNU7jDtEgtH7iJTcXR5CKM/VP+UYfV9nWqTdm/vpo1vrloYpSQsUB2qpHMKzcycjdzOelWUU06S6RR3KpS32zv4t4xNzdS24uza2kD7JJI2CyyuPrBWzlVB5cuuDUNLxElqRLp17dTMp9KGVZJYpR4jcQdpPmKvOg8BabAAREu4eJG5v0myan0t7ZB6MX6qqXKmnbLahQZLS+XkNx7pdo8+ZccvdUpp3appcp2mfum+zKjJj2sRtHxrk47C9wFAxvnt19xmTI/RzVe1U259CWNH9RUH411eP4rzJtM5c/lfSpTrezVbK9jlUPG6up5gqwI+IroNYVFpEKvvs55bSXORtY7CfWpP68eqrLpHaPc2jLFqcYeMnC3cQ5f/1QcgfWMew8zVcvi5MfbXRbH5EZHpdP8M1Glc1hexzRrJE6vG4yrqcgj2101znQKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQHys24441mmmaw09sMvKe58IvNUI/G68/cPEiS7UuKZLeNLS2P76ucqpH8Wn4z+rlnHlzPhVBtkSGIQxdM5eTxlbxYnyrr8Txnmrv0jl8jP9NaXtnRpyQWilIV3ufryN1c+OT1PP3V0tf98pTAWTk0Z8Ny81z7+XvqKr6K9z6EcOCXR5XfLlvv8mnaFqAuLeOUctyjIPUHxB9YPI+sGu2qf2e3+WmhPn3g/Pzu/wBoMffVwr5zLjcW5fwe5jvnKornHb4SAnp9IU/oq7fqqkSOWJJ6k5q1dotxmKIDoJ15+1XFVOvW/jF9lf5PP83+9f4FdEF4ygqcMh5FG5g1z0r0mt9M49bPfRdWk02Rp7TL25OZ7Qnmg8Xj/b8fVseh6xFdwJPC26NxkHxHmGHgQeRFYlMGHpIcMvQ/ePXXtwBxSLC9CMdtrcsA6/ixSeDr9kHx9X5Ix4nm+KofKfR6fjZnX20bvSlK847BSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFec0qopdjhVBJJ8ABkn4V6VT+2HVTBpc5U4aTbGPP0zg492aAyubWXvLma7bIadikYPWOJTyUeRI6+/wA66gKi9Eh2gL9lAP8Az51KV9J4mNRjSPHz1ytsUpSuowOrQ7sw3cLjkGLRN+eMqf0wB+dV4kuHbqxrObnIUkdVww9qEMPmBV/hlDKreDAEe8Zrwf5KOORV+V/w9TxK3GvwQ/Go/e4PlND85Av/ABVXKnOM9Ut/o0qGeLf6DBO8XcSkiOAFBz4VWY9RV/waTS/1cTt9wrb+PzREUqeuzPy8dVS4rZ1Ur9wadeyfUspseblUHvBO75V3RcI6i31hBEPMuz49oAH312V5uGfkwXjZH8EdUJrFmGDp59PV5fOrzZ8ATyYL3qKD4xRgj4tuqSt+yW3f8JdzyH1OF+SgVyZvPxXOkmbYvFuXvZM9kXEBu9PTecywnupMnJOz6rH1lcZ9YNXGsk1rgyTTN1zYSyRyIC5QuWjmC82V1bqSM/8AatJ4b1dbu1huFGBLGrY8ieo9xryD0CSpSlAKUpQClKUApSlAKUpQClKUApSlAKUpQCsx/wDUDL+97RPtXIJ/NRv21porJdagbWb+VXcra2shjjReRdwMyOWxnxAx7PXmZensh9op9hKqltxA5eJxXuupxMcIWkPlGrP/ALoNaLYcBadF0t0Y/aky59vpk4rs1iUW8OYUjViyIvogKpY4yQMZx5eNej/UqS1KOX/yS3tszu2sbyX8HZynyMhVF+JJPyqQt+DNRk+sbeEe1pGHuAA+dWSDUZopoVaYzJK4Rg6orISrEMndqMjIwQc8jnPLnZawvzs1fOjSfGxr4KNB2bsfw15I3mI0VFPxyfnXrqXCNlAiBo5LhmISOOSVipIBPPcSEUAEkgeHQ1dKjNf0xplRo2CyRsWXP1TkFSp8gQevqFc95Lvuns1mZn0iJ0S3t4pVge0t42bPdvEd6sVXcVyyKwbaCfEEKatCqB0AFV7TdIm79Jrgooi3FFVs5ZkZNxJA5BWYYx41NTahEoyzqPfVCx0VX+Mnx3HefgN7d7n6udv7nv8ADbnPXlnbX6ueN7FORuIyfJXDH9Fcn5VxvxzC+RFb3Ew/oQSFT7SVApslJv0OHZEN2e4ChDGxl2ABN2V2cl5Bsbvd7qsl9cd3G8mM7EZsee0E9arEGt3eNsGnOi+G5o0HvUNuHwqt6jxtfSrNH3cUezvI39MseS88AKPA1aJdvjPbIv7FyrpFsWLWL+3im3WCJLEjqD3hbbIoYBvRxnB54qL0NdR0eawtJZ4ZbeeSSMKqnKYAbO4geLfKrZwS2bDT/wDNIh8EQVCdqsyxzaZM7BVS89JicBQVGSSeg5Vly+7ROuiZ7SuI57SOBLYJ3txOkSs4JVN3iQOtR/0XiP8AnWn/AOjk/wCSo3tG1+1ubjS0guIZWGoQFhHIrEDcoydp860OlU0wkZ9xBrGvafEbmd7KWJGUMqK4Y7iByyBVx4p4g+i2El4FyViDKpPIlsbQT7SKr3bTJ/gqQH+Vh/3xXD2pa5bSaJJHFcQyORAoWORWPKSPPJST0Bqye1sg6LDU+IWRJBBZOrqrAbypwwBAPPrivfT+Mr+O9t7S/tIo/pG8RvFJu5qM8wc8vf41bbD0Y41B5BUA+AFVDipd+v6Yv2Yp3/8APhUTWyWi/UpSrEClKUApSlAKUpQClKUArK+Hv3vqV/bnkBcCZR5rKoyfktapVT404JW7dbmKVoLqNSqSrghhzISRTyYZ++gOwMMZzyrl1JIZI2jlIKnrz6Y5ggjoQeeaxu04rvpowTcbOZBCIoPL1kHHuxXdp1or3tus7yzxyl0YSysRu27lOMjybl051s/HtY3k+EUWSXaj5ZcUutOtZFkkue8dc7O8dTsyCDtCgc8EjJycE+ddLccI34GC4l/JiYA+xn2qfjU1p/D1rD+CgiT8lFBPtIGTXlxa80FjJcW6x71BYlwDtQZztU8i3t8/ViuScnN6R1XjmFtsiP7r6nL+Cs1jB8ZZQCPaiK3+9X3+5Oqy/XuYIh5RxM/+07j7q6uz/iX6fbd4wAdX2OFGAeW5WC/ikjOQOWasQrPJkqK4svjiKW0iqrwUW/DXlzJ5gOEHu7tQR8a6IeA7Ec2hEh+1IS5+LkmrHmvlZPJT+TVTK9Ii7jTUghkkgtldo0ysagKXOcAbscgOZPjgcqj+AuK01FJMRrHNEAxCMWWRTkZXcAQQRgjwyvPnU1qsczwSxwy91I6YR+WAQc4JIO0MMru6jORzqpdlfB1xYNPLOvd7k7uNC6szFiCW9AkAeiuM8/rchyrpxqXjbfs58lWsiS9f6LvWO63Hsu75P6Ycfnx4/wCE1sQFZXx7Ds1KTymtQR7ULL9xrT+NvjnX72v9FfNneF/ppl94Df8Awfp5/wDbqPlipnV9Gt7lQlxCkqqcgOMgHGMj3VXeB5P8FWDeUf3MR+qrajggEdDWNf3MqvRD2vBunxurx2kCujKysEGVKkEEHzBANTVKVAOXVNMhuIzFPGskZIJVhkZHQ1Av2baWSD9FQEHPokj7jVopTbB+oV5gez5VTdVbdxJaj7FnMfiW/bV0gHOqRF6XE7eUen5+MiD9daR6Ksv9KUrQgUpSgFKUoBSlKAUpSgFKUoD+arq27m6u4OgjuZQo9W87T7xiuu8n2RxTeMMkUn6LDd8siu/tNs+51ibPITxxyL5ZACED18iffUdKm+2kX+i/3Zr2PHfPA5/TR5+X7Myr9pm3wtlQfUKjuKtH+m2jW3e922cqxJ2N1ykgU8xzI+B8K8+DrzvbK3Yn0mgiJ9pRc/PNSkm7wr5qaeOto96oWRaZBcD8MDT4DHvV3Z97FM7BhSqqC3NupJNWCvFImzzb51G8Y31xb2zzW6K7x4ZkYE7lH1sYOcgc/HpS6eStsKVC0j04h02GaMtIrF0VijxkiRD19Bl59QOXQ9Ode3DskrWsLTAiUxIZAeu7AzkVmi9s02P4LGT/AFjc/dtqL1ntL1GYbEIhDcgI1O855YDNzz7ADU/TetD9pG1s3I45+qvAb/AAVwcF6W1vZRRSZMm3fIScne53Nk+JBOM+qphmA61m/Zea69H5zgc/fWaccd7e30UNnH3stvHI03PCgSbAEJ8+Wff7amuJ+KJJZfoOnr3ty/IsOaQDxZ26Ajy8PkbZwNwlFp0BRTvlkIaaY/Wlbn1J54GTgesnqTXTglw1Xz8HPnuXLn8+zKoLG+0xY0vzPHbMfQkgk3LAWJO11KkYJP8A91cNPsJWQPDqV0yNzBDQsp/+KrlxNfQRW0rXDRiMowIkxtfIOFw3Js9MeNZtwFwdaS6TBNLDmV2fLh3Ukb3x9VgOmPCtLXyYS/gsQtr0dL+T86GM/cBQrqPhfp77VD9zio8cGW4+rJcp+TcSD/irsteBQ3P6VfKP86k+7NY7L6P1jU/5/F/qa/8AVr6Bqf8AP4v9UX/q10rwFF43d/8A63J+2v0Oz+AnBuL4+27k/bVivRX+IOJrqzA7zUFaRuSRJap3jk9ABvOMnxqT7NtDvTPLqV+QJZoljRMAFUBDeljkDyXl7aj+zTQoE1LUcp3kkEwWJ5CXdFIPRmyc45Z61p9aytIq2KUpViBSlKAUpSgFKUoBSlKAUpWaSaNLcave273t5D6EMsPdTuihWG1gFBxyYfI0BbOLeDbTUVC3CHcudkiHa6Z8j4+wgiqg3YnDnAvbkIeqnaSfzsfqr31zTr+wRZbe/uLhlO4wz7GEij6y7tuQSOnPwq68O63FeW6XERyrjp4qRyZWHgQeVSqa9MhpP2Z/ccJX2lHfYlrq1HNrdz+6p5mNgAD59Pcetd+hceWs52F+6kHJo5fQdT4gg8jWhGsY7W9bs5L6ERRrcTQ71nQoNhVseiZPtKRyxyG4881m8St9ezaMzld+jS0lU9DX6zWQw6rp6LlHv7IjmVRmeIewekpHtrzk4mvWcC2upWj8XmijX2YAUE+01VeFkquMrsu/KxpbZdbvs7t+9aW3buWfmy92rp7VU4K+449VdemcJRRSLNLIZ5E5oWChYz5qijr6yT7qoTavqbdbzA/oxp+tTUTeO8rbJrm5uG8Y1LsPeichW/8ATsy7tpL9sp/UY48Zba/Bq2scaWkB2953kh6Rx+m59QVc1GmC/wBQ+uTZ25/FBDTyD2j0Yx7Mmstij2zfuQaBojkHG2TOCMkMM46jn15126hxff8AKL6W+CQGKqoxnlzIHI+zFUXjzNaT2Q/Ibnetf9J/iPTBpcqR6bdzRyzfhUO1sAAncTjI58uZ8a7eBeMtXYTxLGt2UdcSSvs7vIPIgD0gcZ68ufnyrdl3SZOSXbmztksx8yx6138A8TRWk15vWVy7RYEcZf6ofOcdOors8nx/o4VS7ezlwZfqZNPpaLDren3k5a81NYe7t4ZWjgj3FNwUtvYMTuOBVl4btzFpllERg9ypPt2gn76p/F3Gv0mD6OlvcIbhliR5I9gJdlBAyefo5rRNSjCd3EOkcar8Bj7gK87dcW6O2uO0pPmm2245PQfOpWvCwj2oPXzPvr3qiKMV+o+or819XrUr2QUzhH0Ne1WPwZbdx690ak/M1fqoNwe54ljJ5Lc2RUf0njYn5IKv1dBQUpSgFKUoBSlKAUpSgFKUoBVJ42tZ4L2DUoIWnCQyQzxpzfYTvRkT8Ygl+XrFXalAUaw1y3vwWhlzIudyNydcdQyHmMVVNQvrnS53FoEIuwcxN/FyADMyjxXGMjzx6qtXatpVmtpJeyQnv4wojliOyXczBEzIMcgSM58M4rPYBMWTe5uLuYKikkdAOQyOQReZJ8eZ5k1llycV17fo1xY+b79L2TfD3aXLZSvFqEpmjZS8cgX01YY9AqvIqfA+GPXyrOqafcQvJqJtzDb3ErN3Zbc8YbmGfA5BiT7M1OHRbmwS5uF7qeJlWOaOdcGcgkN3XLku44VTndjl1GevTuJYYrGKzjBu53DqLdVYkZYnY4cZVFyFG7nheVWxZrhql20WyYZrafSKZxFcK0ICnO4r8yKlbRcIo9QqL4q4Pu9PEHfmPZM4IVWz3bDmU59QARzGRX6udcRAET0nwOXgPafCvfweVFOslddJHjZcNSlE9nZq9z3cTEEbjyXPmeQrTOCtFjtYEEY9NgGd/wAZ2PUk/qrGJFV8tNIpYg4APJc+Xr9dWLRO0ySGLu2VX24USbwobHiVb7xXn+Vn+vf2rpHVgxfTnv2WbtljV47dwFE/e7FbHNlZTuBx1A5GqFqmlqlq6rksMMW8SR41633EwuJu+uJFJUEIinKpnrzPU+uvG84hgZGUEnII6H9ldHjY8cYqdNcn+zLNd1a4p6RZ9B7LJbmzgube+x3kasUkjyFOMMAwJzhsjp4Ve+zPgd9NE7SSrLLMybiowqhA2AM885Zs+6vHsQlZtIhDAgK8oXPiN5OR7yau0jgAknAAJJ8sV5rumtNnWpS7SKFxV++tcsLXqturXMg8ivKM/pgfGp68O+Y/lY+HKq92cSG4n1DVW6SyGOH+ri9EY8s4XPrFWHTFzJnyBNYZX6RrJLAUpSswKUpQFM7UT3Fzpl8OQiuRG58Ak2Fcn3Zq/wBVTtN0o3Ol3CKMuid4mOuYvT5esgEe+pDgrVxdWNvODktGu7n+MBhs+vINdCe0UJulKVIFKUoBSlKAUpSgFKUoBSlKA576zjmjaKVFdHGGVhkMPWKoeo9lUUX7tp8kkNxG26Le5aMDHOPaeYVvfWiUpolPRlGo8b9yg+m2UyXMOWVAhMbEKQZEf6u0AnmenOuLslnlm1SadNrrJGWuGUDZGxP7miN1zjOfPBrYmQEYIyD1B8a5oLeC3jOxI4oxlm2qqKPNjjA6Dr6qpMKXtF6yOlpmTf8AqAuN9xZwdVCyOw9pAHyBrPLmziX8UZqd7SuII73UmmtzvjijVAxyFYgsSV9XPr44qvSyOxyQvxP7K7cVxMPl7OW1Trr0eX0ZPsr8KLEmcALn3V+4YZZJEijUNJKwVFGScnlnp0rTNf7HRHp6NbkteRAtIc8pc82QDwx+L5+PWlZYT6QU0/ZmqADwHwrs7tWQ4UDkajopGYZwB4EHOQfI17xyyAEDbz9taLNC9lHjo1Hsv4sS00KWWTLfRpHULnmS7Aog9rNXnf3WvXds7d7DCskZxAieltYch3hyQSPHNZ1a6z3VnPZurfu80MqMPq+i3pZycjlj4VuNt9RfyV+4V52WuPo65W/ZBaXxC1rZRWi6bdgRoqkju23Hqzei/i2T08a6tN44jQnfa3qk4/iHbz8VBq3WMS92vIfD117G3T7I+ArJvfbLeuisN2i2g+sl0vttpf8Alr8jtN0/xaYe2CQfetWf6Kn2RXz6JH9kUBWv75unfyr/AOif9lfP75mnfykh9kL/ALKs30OP7PzNPoifZFOgVyPtP0/mMznPlBIfuWqpwdqOo230iLT7Tv7QTu8Qm3RSBWwSqB8cs8skdc1qAtk+yK6bbA5AAewYrSK+CrRDcGcVJfxMwRo5YnKTRP8AWjYeGccx66sFUDgj/HWr46boOXr2DJq/1oVFKUoBSlKAUpSgFKUoBSlKAUpSgFVztC4dmv7NreKURFmUsSDhgOqnHPB5fCrHSgMOXsa1FV2Ce32+w/sr9x9i+oHrcwL+aT+qtupQFA7OuzIafM1xNIs02NqELhYwepAPiemfLPmav9KUBmHGHY+Lm4e4tpxB3h3OhTK7vFlweWeuPOob+8hefz2H/RGtopQGMN2HXL4El7GV8hEflzqcg4E1eBRHDqMTRryXvIQWA8iSD99aXSoaT9jZn0eicQIABe2xA84R+yvo07iIf/sWZ9sX7K0ClRxX4J2Z99G4kH8ZYn2qw+6vgTiQfi6cfb3n6jWhUpxQ2Z/u4k/ktNPvl/56/LTcSD+I04+wy/8AUrQqU0hsz36bxEOtpZH2O/62r6NU4h6CxtQTyDGUkD1kbsmtBpTihsq3AXDEtos01xIJLm4k7yVlHojyRfUKtNKVYgUpSgFKUoD5moG8430+Jtr3cOR1Abdj9HNZz2ycWSSTNZRsVijx3uD+EYjO0+agEcvEn1VRdI0ae5YpBC0hAyQo6D1noK3jCmt0zOr70j+iNN4os5yFiuYXY9FDgMfYp5mvDiHjC0snWOdyrMu4AKTyyR4esVj3CnCNyuo2yT28iL3oYll9HCAv9Ych0qY7ev4ZB/UH+0ao+nPNLY5vjs0fh/jSzvJTDBIWcIXwVI5AqCcn1sPjU/WE9jl7FDfSSyusaLay5ZjgD90g8TWgy9rOmq23vJCPtCJtv3ZPuFReNp6RM1tdl2pXJpuoxXESyxOHRhkMP/OR9VRvEHGNlZnbPMFfGdigs/6Kgke+s0m3ottE5X2qRH2t6aTgtKo8zE2P9nJ+VWrStUhuIxLDIsiH8ZTn3HyPqqXNL2gqT9HZX2oLiLjCzsjieYByMhFBZ/0VBx7TUHH2t6aTzaVfWYj/AMOTUKKfaQdJF5pUZofEFvdxGaCTegJBJBXGBk5DAEVBan2oadCxTvWkI692hYD87kp9xoppvWhtFvrm1DUIoE7yaRY0yBucgDJ6DJqrWvatpjkAyuhP2on+9QQK5O2yYHTQR0aaLHr6t+qpUPkkyHS1tFk//MdP/ndv/pF/bXfp2owzpvhkSRckbkYEZHUZFfy/Ws9gV/8Aud1AT9V45B+epRvhsX41reFTO0VnJt6L3c8UWUTsj3UKOpwytIoKnyI8KW3FFlI6xpdQs7HCqJFJJ8gK/njX7vvrm4l/lJpW+Lkj5Yrr4JfbqFqf8snz5Vb6C1vZH1Hs/pKvtRetcRWtrjv5kjLAlQx5tjrhepqvXHaxpi9JJH/Jif72ArBRT9I0dJF0pVT0ftK0+4cRrKyOxAUSIVBJ5ABvq59Wa7+LeJ4LOJhJKEkeNzEOeWIHhy8yKjjW9aG17J6lfzsO0LVMfwuT9GP/AJK2jh3jG0ue7ijnWSYxglQDnIUFvDFXvHUlZtMsFfaitd4jtbNQ1xMseeg5lm9iKCT7hVc/vuabnG6bH2u6OPh1+VVU0/SLOki8UqM0PX7e7TfbyrIB1A5Mv5SnBHvFdV/fRQxmSV1RF6sxwBVdPeidnTXyqVP2taarYDysPtLE2P8AawflU1oHF1peBjBJu2bdwKspXdnGQR44Pwqzil7RCpMwHiiYveXLHqbmf5SMB8sCtU7BrcCznkx6TXBUn1LHGQPizfGs045sTDqFyhH8dI49kjGQY/Sx7qunYxxVb28U1vPKsZMveIXOA2UVWGfP0QceuunJ3j6MZ6o1ysZ7ev4XB/UH+0atMtuMLGSVIY7iN5HJCqpz0BJyRyHIHrWZ9vX8Lg/qD/aNWOJNX2Xt/aU7hjh6a+m7iHYG2M5LnAAUqD0B55YVzarYPBNJBJjfGxVscxkeRq4dh3+M2/zWX+0gqB4//wAZXf8AXt+qulU+ev0ZNfbsvHZnrJttHvJuvcu5QHpkou0e9iKy+6uHkdpHYu7ElmPViav3Cdq0ugagq8yHDY8+77uQ/JTWeE8qiEt0/wBk16RauLuAZ7CGOaSSNw7BSFByhIJxk/W6HnUh2Kak8d/3IJ2SxtuXwyuCpx59Rmuy27JTLGsq6hEyMAwPdnGCM/ylTvAHZ+LW778Xcc/doylEXBBcciTvOOhqlWuLTeyyl73oyjWLqSWeaWQku8jls+B3Hl6sdMeGKsOg8GQXaKIdQhExHOJ1KtnyGT6XuzVt454At7ieR7a4iinJ3SQuwCsW55HihOc9CDnw61m2u6FPaSCOdQrEblIYMCM4yCPXV5pUunoq1p9mi67o8+m6DJCWG95gHZCcbXbpnwzgA+3FZlpsEbyqksndIThpNpbb69o5mtb7NdTF/ps8F4d8cXos7HmU2hgWbzXHXryBqqax2ZvkvZTxXER5hd6iQerrhvby9lUitNp+yaW9NHrpvZiZtstteQToGUtjIIGQSCOeDjwIFWrt2O2whUdDcoPhFKf1VkmmajNaTiWJikkbEHB64PNW8CPDFaZ20Xve6fZyYx3kgfHl+5N+2jT5ztkprizLILZnDlRnu03t6l3Kmfiy1Y+znWRbS3DE4D2sw96gMvvzXzs4sO/nuYPGSxuVHtPd7T7jg1Vx0rV/duSnrTPW3gZyQBkhHdvYilmPwFdvDD4vLY/+4h+bqKleCrDdBqMx6R2Uij2yf9l+dQmjNi4gPlPCfhIpqd72iNejYe1zhWe9FubePc6M4bLABVYA5JJ8wOmao912W3cUTSyy267VLbd5ycDOASBzqydsfF88MqWkDtGDGHkdThjuLAKG6j6p6eqqTwrwjLqPfy96qiFQXd8szZDEAc8/inmT8axx8lO29I0rTorhPLNa52jcOSXVhBed4B3FrudSCS+VQ8jnl0+dZG/Q++t/4mI/uHLggj6GOn9WKnK9OdEQtpmA1sPAnAD2EovXmR1ELHYEII3KD1J8s1j1f0lFPHLad2kiMzQYAVgT+Dx0B88UzU0tIQkz+ete1aS6nknkYkuxI9Q/FUeQAxyqcveAZ49PF+XjKlVYpg7gGIAOeh6jlVWKFfRPUcj7RyNXnh/szN3bpMl9GA65KFCSh8Vb0+o9laU1Ou9FUtkN2d6m9vqNuUJAklSJx4MJGCYPsJB91TXbNrry3htgx7uAD0fAuwySfPAIAqZ4c7LxDdwyfTYZDDIkhjVPSIRgftnHPHhVO7SoSmqXIPjIGHrBRcf+eqqJzV7X4LNNSfrg3gibURI0boixkAlsnJIzgAerxrTuy7g6awW4E2zdI6bSnMFVU48Bjmzcqhew3VYUgnieREbvAwDMBkFQMjPrFaXZ3scoJjdXAOCVOQD5ZFZZbrbXwXiVrZUe0bgAX+JYmCTqMZP1ZB4K2OmPA+usrveA9QjbaYM+REkeD7MuD8QK+Upjt+iLlbJvgzgLUkuYJ+6WNUkViWkTmB1wELeGeuKsPa3wnd3lzC9vGHVYdpO9Vwd5PRiPClKOnz2TxXE8Oyvg28tL4y3EQRPo8i53o3MvEQMKxPRT8KiOL+ANQmvbiaOAMjysynvIxkHHgWyK+0qOb5bHFaLr2U8PTWttNFcxhS0pONytkFQPxSfXVS4u7JZ1kZ7Pa8ZJIiLBWT1KWwpHtIr7SoVtVsOVoq0PB2ok7Fgf8kTRgf2mK0rsi4Uu7LvzOqIsojwocM2V3ddvLo3nSlXy09ETK2VntE4Iv5r6a4jhDxuylSJEBwsaLzDsCOhqvWnA2oytgQEnplpY8D2+mTj2A0pUzb4kOVs1Lh/gqS00u4t1YNcTxy5OcKGaMooBPgPOssuuBdRgPOAj1rLHz+D5pSqY7e2TUrRIcPdmV7cOveqIY8jc5dWJHjtVCeftxV57VeFri5gtorWPeIi2QXVcDYqr9YjPjSlTVvkgpXEiey7gu8tL4y3EISPuJFz3iNzZoyBhWJ6A1X9Y7NNQ7+YxQgxmVyh7yMeiWJHItkcjilKhZK5bHFaLVwvwZcwaTexPGBPOsgVN6nPobR6QOBk58ap9r2b6msiN3A9F1P4WPwYH7VKVM2+w5Rd+1bgaa7KXEADSpGEeMsBuAJI2luWQS3UjrVF0XgHU5GKqndK313Mq7cetY2Jbx5Yr7SpnJXEOVscQdm97byYVRMh+q6sq59RV2BB+IrROB+GJP7kSWs4KPN3wI3Btob0V5qSOgHQ0pUXbcoTK2ZlqPZ/qELlWhDDPJlkjw3rAZgR7xVw7H+FLq3u3mng7tDAyq2+M5JeM4wjE9AetKVarbgTK2evH3Zc8sr3FmVy5y8LHAyepRugyeeDyyfCqMODdRViggYHxAljH3SYpSkW9EVKLx2V8F31pdmeeNUQxOpHeKzEkqQcJkeB8fGprtK7PzfYmhZVnUYIb6sg8ASOhHnXylZO3y2X4rRls/AmoK21rf0h/lIvl6dan2TaBd2dvKk6Km+QOq7wSPRCnO3I8B40pWmS25Wysytn/2Q=="
          title="ChessMatec"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          ChessMatec
          </Typography>
          <Typography variant="body2" color="text.secondary">
          אפליקציה ללימוד שחמט
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">קישור</Button>
        </CardActions>
      </Card>
      
      <Card onClick={handleOpen} sx={{ maxWidth: 300, margin: "20px auto" }}>
        <CardMedia
          sx={{ height: 250 }}
          image="https://yt3.googleusercontent.com/ytc/AGIKgqOwi08xoXHLyGJ2iTqMx5uZf06iYlrTkiPOb3WAxA=s176-c-k-c0x00ffffff-no-rj"
          title="Intimate Partner Violence Video"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Intimate Partner Violence
          </Typography>
          <Typography variant="body2" color="text.secondary">
            סרטון הסברה על אלימות מינית במערכת יחסים
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">קישור</Button>
          {/* https://www.youtube.com/watch?v=vK3RhRwMwIg */}
        </CardActions>
      </Card>
    
      <Card onClick={handleOpen} sx={{ maxWidth: 300, margin: "20px auto" }}>
        <CardMedia
          sx={{ height: 250 }}
          image="data:image/jpeg;base64,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"
          title="I-risk"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          שאלון i-risk
          </Typography>
          <Typography variant="body2" color="text.secondary">
            שאלון אנונימי לאבחון סיכון במערכת זוגית
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium">קישור</Button>
          {/* https://i-risk.co.il/ */}
        </CardActions>
      </Card>
    </div>
  );
}
const expertsList = [
  { title: "פסק-זמן" },
  { title: "chessmatec" },
];
