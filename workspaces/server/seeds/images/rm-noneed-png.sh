CUR_DIR=$(pwd)
cd $CUR_DIR
GET_ALL_IMAGES_IN_DEEP=$(find . -name "*-fs8.png")
for i in $GET_ALL_IMAGES_IN_DEEP; do
    echo "optimize $i"
    rm $i
done