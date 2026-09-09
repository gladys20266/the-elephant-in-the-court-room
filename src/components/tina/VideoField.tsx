import React from 'react'
import { useCMS, wrapFieldsWithMeta } from 'tinacms'

interface VideoMedia {
  id: string
}

const VideoField = wrapFieldsWithMeta(({ input }: any) => {
  const cms = useCMS()

  const openVideoManager = () => {
    cms.media.open({
      directory: '/videos',
      allowDelete: true,
      onSelect: (media: VideoMedia) => {
        input.onChange(media.id)
      },
    })
  }

  return (
    <React.Fragment>
      <div className="space-y-3">
        <div className="flex flex-col gap-2 sm:flex-row">
          <input
            {...input}
            type="text"
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
            placeholder="/videos/example.mp4"
          />

          <button
            type="button"
            onClick={openVideoManager}
            className="shrink-0 rounded bg-gray-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          >
            Choose Video
          </button>
        </div>

        {input.value && (
          <div className="rounded border border-gray-200 bg-gray-50 p-2">
            <video
              src={input.value}
              controls
              preload="metadata"
              className="max-h-40 w-full rounded bg-black"
            />
          </div>
        )}
      </div>
    </React.Fragment>
  )
})

export default VideoField