CUR_DIR=$(pwd)
cd $CUR_DIR
GET_ALL_IMAGES_IN_DEEP=$(find . -name "*.jpg")
for i in $GET_ALL_IMAGES_IN_DEEP; do
    echo "optimize $i"
    jpegoptim --max=60 $i
done