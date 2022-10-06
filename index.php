<?php
    $host = "localhost";
    $user = "root";
    $password = "";
    $database = "db_film";

    $conn = mysqli_connect($host, $user, $password, $database);

    $json_data = get_file_contents("index.js");
    $index = $json_decode($json_data, true);
    if(count($index) != 0){
        ?>
        <table>
            <tr>
                <th>Image</th>
                <th>title</th>
                <th>summary</th>
            </tr>
            <tr>
                    <td><img src="<?php echo $anime['image'] ?>" alt=""></td>
                    <td><?php echo $anime['title'] ?></td>
                    <td><?php echo $anime['summary'] ?></td>
            </tr>
        </table>
        <?php
    }
?>
