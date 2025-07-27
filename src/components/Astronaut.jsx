import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Astronaut(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/iron_man_flying_animation.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions && animations.length > 0) {
      const action = actions[animations[0].name]
      if (action) {
        action.reset().fadeIn(0.5).play()
      }
    }
  }, [actions, animations])

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={1.35} position={[-6, -18, 0]}> {/* Adjusted Y position slightly lower */}
        <group name="Sketchfab_Scene">
          <group
            name="Sketchfab_model"
            rotation={[Math.PI, 0, -1.8]}         // Faces forward
            position={[0, -18, 0]}             // Moves model to center of screen
            scale={0.35}
          >
            <group
              name="47550bd4061844bf8d624a6de7028215fbx"
              rotation={[Math.PI / 2.5, 2, 1]}   // Default rotation from GLTF
              scale={0.03}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Object_4">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_7"
                      geometry={nodes.Object_7.geometry}
                      material={materials['Scene_-_Root']}
                      skeleton={nodes.Object_7.skeleton}
                    />
                    <skinnedMesh
                      name="Object_8"
                      geometry={nodes.Object_8.geometry}
                      material={materials['Scene_-_Root']}
                      skeleton={nodes.Object_8.skeleton}
                    />
                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials['Scene_-_Root']}
                      skeleton={nodes.Object_9.skeleton}
                    />
                    <group name="Object_6" />
                    <group name="Iron_Man_mark-7(Subsurf)" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/iron_man_flying_animation.glb')
