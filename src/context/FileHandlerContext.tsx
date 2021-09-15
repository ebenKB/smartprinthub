import React, { FC, createContext, useState } from "react"

const initialState:any = {
  files: [
    "https://www.thebalancecareers.com/thmb/PQtID-Asz_mLWgYqnDC0gS9cs7M=/400x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/466123061-57aa8b343df78cf459e14dcd.jpg",
    "https://www.thebalancecareers.com/thmb/r5q8gcPMRuS4K-n4BcuiDfzfUlM=/400x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/powering-through-to-knockout-her-deadlines-619047616-587a61965f9b584db3d7a604.jpg"
  ],
}

export const FileHandlerContext = createContext(initialState);

export const FileHandlerProvider: FC = ({ children }) => {
  const [files, setFiles] = useState<any>({
    files: Object
  })

  return (
  <FileHandlerContext.Provider value={{ files, setFiles, }}>
    {children}
  </FileHandlerContext.Provider>
  )
}
