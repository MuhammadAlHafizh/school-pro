import React from 'react'
import { Badge } from "@/components/ui/badge"

export default function SmallTitle({title} : {title : string}) {
  return (
    <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-1.5">
        <span className="text-red-500">👋 </span>
        <span>{title}</span>
    </Badge>
  )
}
