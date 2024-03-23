CUR_DIR=$(pwd)
cd $CUR_DIR
GET_ALL_IMAGES_IN_DEEP=$(find . -name "*.png")
for i in $GET_ALL_IMAGES_IN_DEEP; do
    echo "optimize $i"
    pngquant --quality=60-70 $i
done