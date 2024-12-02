
import TrustLogo from './TrustLogo'



export default function VerificationPending() {
  return (
    <div className="min-h-screen bg-[#1b1b1c] p-6 md:p-12">
      <div className="mt-24 flex flex-col items-center justify-center">
        <div className="w-40 md:w-[160px]">
          <TrustLogo />
        </div>
        <div className="flex flex-col items-center">
          <div className="mt-12 h-64 w-64 flex flex-col items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="300px" viewBox="0 -960 960 960" width="300px" fill="#48FF91"><path d="m421-298 283-283-46-45-237 237-120-120-45 45 165 166Zm59 218q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/></svg>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white" style={{ fontFamily: 'boldfont' }}>
              Your Verification Is Pending.
            </h1>
            <h4 className="mt-4 max-w-sm px-4 text-center text-white opacity-70">
              Your response has been recorded and will be reviewed manually within 48 hours. 
              Please check your wallet for further information.
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

