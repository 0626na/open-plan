export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F2F3F5] p-8 animate-pulse">
      <div className="flex gap-10 items-center">
        {/* 이미지 영역 스켈레톤 */}
        <div className="w-[660px] h-[440px] bg-gray-300 rounded-xl"></div>
        {/* 정보 영역 스켈레톤 */}
        <div className="flex flex-col gap-4">
          {/* 첫 번째 행 스켈레톤 */}
          <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm w-full">
            <div className="flex-1">
              <div className="h-4 bg-gray-300 rounded w-20"></div>
              <div className="mt-2 h-4 bg-gray-300 rounded w-24"></div>
            </div>
            <div className="flex-1">
              <div className="h-4 bg-gray-300 rounded w-20"></div>
              <div className="mt-2 h-4 bg-gray-300 rounded w-24"></div>
            </div>
          </div>
          {/* 두 번째 행 스켈레톤 */}
          <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm w-full">
            <div className="flex-1">
              <div className="h-4 bg-gray-300 rounded w-20"></div>
              <div className="mt-2 h-4 bg-gray-300 rounded w-24"></div>
            </div>
            <div className="flex-1">
              <div className="h-4 bg-gray-300 rounded w-20"></div>
              <div className="mt-2 h-4 bg-gray-300 rounded w-24"></div>
            </div>
          </div>
          {/* 세 번째 행 스켈레톤 */}
          <div className="flex flex-col bg-white p-4 rounded-xl shadow-sm w-full">
            <div className="mb-2">
              <div className="h-4 bg-gray-300 rounded w-40"></div>
            </div>
            <div>
              <div className="h-4 bg-gray-300 rounded w-40"></div>
            </div>
          </div>
          {/* 버튼 스켈레톤 */}
          <div className="w-80 h-16 bg-gray-300 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}
