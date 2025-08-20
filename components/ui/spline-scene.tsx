"use client"

import { Suspense } from "react"
import Spline from "@splinetool/react-spline"

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <div className={className}>
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-background to-muted">
            <div className="flex flex-col items-center space-y-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
              <p className="text-sm text-muted-foreground">Loading 3D Scene...</p>
            </div>
          </div>
        }
      >
        <Spline scene={scene} />
      </Suspense>
    </div>
  )
}
