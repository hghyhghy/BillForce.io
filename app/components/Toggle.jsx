"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from '@nextui-org/react'
import React from 'react'

const Toggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null
  return (
    <div>
        <Switch isSelected={theme ==="dark"}
        onValueChange={() => setTheme(theme === "dark"?'light':'dark')}
        />
    </div>
  )
}

export default Toggle