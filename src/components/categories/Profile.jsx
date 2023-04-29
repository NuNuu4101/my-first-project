import React from "react"
import neco from "../../picture/neco.png"

const Profile = () => {
  return (
    <main className="mx-2 lg:mx-20 sm:mx-8 md:mx-12 flex justify-center my-10 items-center h-screen">
      <div className="flex flex-col items-center">
        <div className="md:text-4xl text-3xl font-castoro uppercase">My Profile Page</div>
        <div className=" w-52 h-52 md:w-60 md:h-60 my-10 "><img src={neco} className="object-cover object-center w-full h-full rounded-full"/></div>
        <div className="text-2xl">Minn Htet Wai</div>
        <div className="text-base opacity-70">Student at TTU</div>
        <div className="text-sm">Status: Single</div>
        <h1 className="text-base font-semibold">Shared thoughts:</h1>
        <div className="leading-5">I know what you gonna say but let me tell you this, I can't fix that error. It is basically <span className="text-xl text-semibold text-ellipsis whitespace-pre-wrap">IMPOSSIBLE</span> at this point.</div>
      </div>
    </main>
  )
}

export default Profile
