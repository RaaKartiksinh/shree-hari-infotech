import { Box, Skeleton } from "@mui/material";
import React from "react";

export default function CardLoader() {
  return (
    <>
      {/* Search  */}
      <div className="col-span-12 lg:col-span-3 flex justify-center items-center rounded-lg p-0 lg:pt-3">
        <Skeleton
          variant="rectangular"
          width="100%"
          height={60}
          alt="Image Loading"
          className="rounded-xl"
        />
      </div>
      {/* cart   */}
      <div className="loderHight overflow-hidden">
        <section className="py-1 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg-3 mx-auto">
            <div className="rounded-3xl p-4 lg:px-4 grid grid-cols-12 gap-y-4">
              <div className="col-span-12 lg:col-span-3 flex justify-center items-center rounded-lg p-0 lg:p-3">
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={140}
                  alt="Image Loading"
                  className="rounded-xl"
                />
              </div>

              <Box
                className="col-span-12 lg:col-span-9 detail w-full px-3"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <Skeleton width={"70%"} height={48} />
                  <div>
                    <Skeleton width={200} height={48} sx={{ mb: 1 }} />
                  </div>
                </Box>

                <Skeleton level="body-xs" variant="text" width="92%" />
                <Skeleton level="body-xs" variant="text" width="99%" />
                <Skeleton level="body-xs" variant="text" width="96%" />
              </Box>
            </div>
          </div>
        </section>

        <section className="py-1 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg-3 mx-auto">
            <div className="rounded-3xl p-4 lg:px-4 grid grid-cols-12 gap-y-4">
              <div className="col-span-12 lg:col-span-3 flex justify-center items-center rounded-lg p-0 lg:p-3">
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={140}
                  alt="Image Loading"
                  className="rounded-xl"
                />
              </div>

              <Box
                className="col-span-12 lg:col-span-9 detail w-full px-3"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <Skeleton width={"70%"} height={48} />
                  <div>
                    <Skeleton width={200} height={48} sx={{ mb: 1 }} />
                  </div>
                </Box>

                <Skeleton level="body-xs" variant="text" width="92%" />
                <Skeleton level="body-xs" variant="text" width="99%" />
                <Skeleton level="body-xs" variant="text" width="96%" />
              </Box>
            </div>
          </div>
        </section>

        <section className="py-1 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg-3 mx-auto">
            <div className="rounded-3xl p-4 lg:px-4 grid grid-cols-12 gap-y-4">
              <div className="col-span-12 lg:col-span-3 flex justify-center items-center rounded-lg p-0 lg:p-3">
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={140}
                  alt="Image Loading"
                  className="rounded-xl"
                />
              </div>

              <Box
                className="col-span-12 lg:col-span-9 detail w-full px-3"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <Skeleton width={"70%"} height={48} />
                  <div>
                    <Skeleton width={200} height={48} sx={{ mb: 1 }} />
                  </div>
                </Box>

                <Skeleton level="body-xs" variant="text" width="92%" />
                <Skeleton level="body-xs" variant="text" width="99%" />
                <Skeleton level="body-xs" variant="text" width="96%" />
              </Box>
            </div>
          </div>
        </section>

        <section className="py-1 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg-3 mx-auto">
            <div className="rounded-3xl p-4 lg:px-4 grid grid-cols-12 gap-y-4">
              <div className="col-span-12 lg:col-span-3 flex justify-center items-center rounded-lg p-0 lg:p-3">
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={140}
                  alt="Image Loading"
                  className="rounded-xl"
                />
              </div>

              <Box
                className="col-span-12 lg:col-span-9 detail w-full px-3"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                  }}
                >
                  <Skeleton width={"70%"} height={48} />
                  <div>
                    <Skeleton width={200} height={48} sx={{ mb: 1 }} />
                  </div>
                </Box>

                <Skeleton level="body-xs" variant="text" width="92%" />
                <Skeleton level="body-xs" variant="text" width="99%" />
                <Skeleton level="body-xs" variant="text" width="96%" />
              </Box>
            </div>
          </div>
        </section>
      </div>

      {/* pagination */}
      <div className="col-span-12 lg:col-span-3 flex justify-center items-center rounded-lg p-0 lg:p-3 mt-3p">
        <Skeleton
          variant="rectangular"
          width="100%"
          height={60}
          alt="Image Loading"
          className="rounded-xl"
        />
      </div>
    </>
  );
}
